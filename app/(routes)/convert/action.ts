"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { convertSchemaInput } from "@/lib/Schemas";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

let model: ReturnType<typeof GoogleGenerativeAI.prototype.getGenerativeModel>;

const initializeGemini = async () => {
  if (!model) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    const genAI = new GoogleGenerativeAI(apiKey);
    model = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
  }
  return model;
};

// Helper function to create a chat session
const createChatSession = async () => {
  const model = await initializeGemini();
  return model.startChat({
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 500,
      responseMimeType: "text/plain",
    },
    history: [],
  });
};

export async function convertCode(dataToSend: any) {
  console.log("hello from server");
  console.log("parsedData", dataToSend);

  const validatedFields = convertSchemaInput.safeParse(dataToSend);

  if (!validatedFields.success) {
    return {
      Errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and submit again",
    };
  }

  console.log("hello from server 3");

  const { legacyLanguage, modernLanguage, code } = validatedFields.data;
  const chatSession = await createChatSession();

  try {
    const convertedCode = await chatSession.sendMessage(`
      Convert this legacy code ${code} written in ${legacyLanguage} 
      into modern code language ${modernLanguage}. 
      Provide the entire code with no explanation.

      NOTE: FIRST ANALYZE THE CODE AS PER THE LANGUAGE SYNTAX AND THEN CONVERT IT. IF THE CODE IS NOT FOLLOWING THE CORRECT SYNTAX OF THE PROVIDED LANGUAGE, THEN SAY "INVALID CODE" AND DO NOT MAKE ANY CONVERSIONS NOR DOCUMENTATION.
    `);

    const responseText = convertedCode.response
      .text()
      .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

    const generateDocs = await chatSession.sendMessage(`
      Write me the documentation of this code with examples. Explain what the code does and what the methods and functions do, but don't include any code snippets.
      ${responseText}
    `);

    const responseText2 = generateDocs.response
      .text()
      .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

    // Store data in the database
    const session = await getServerSession();
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 201 });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          msg: "user not found",
        },
        { status: 201 },
      );
    }
    await prisma.history.create({
      data: {
        legacy_language: legacyLanguage,
        legacy_code: code,
        modern_language: modernLanguage,
        converted_code: responseText,
        documentation: responseText2,
        authorId: user.id,
      },
    });

    return {
      success: true,
      msg: "success",
      generatedCode: responseText.trim(),
      documentation: responseText2 ? responseText2.trim() : "",
    };
  } catch (error) {
    console.error("Error in code conversion:", error);
  }
}
