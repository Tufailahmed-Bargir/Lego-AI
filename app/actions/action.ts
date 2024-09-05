// "use server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { z } from "zod";
// let model: ReturnType<typeof GoogleGenerativeAI.prototype.getGenerativeModel>;
// const initializeGemini = async () => {
//   if (!model) {
//     const apiKey = process.env.GEMINI_API_KEY || "";
//     const genAI = new GoogleGenerativeAI(apiKey);
//     model = await genAI.getGenerativeModel({
//       model: "gemini-1.5-flash",
//     });
//   }
//   return model;
// };

// // Helper function to create a chat session
// const createChatSession = async () => {
//   const model = await initializeGemini();
//   return model.startChat({
//     generationConfig: {
//       temperature: 1,
//       topP: 0.95,
//       topK: 64,
//       maxOutputTokens: 500,
//       responseMimeType: "text/plain",
//     },
//     history: [],
//   });
// };

// const convertCodeSchema = z.object({
//   legacyLang: z.string().min(3, "Legacy language is required").max(20),
//   modernLang: z.string().min(3, "Modern language is required").max(20),
//   legacyCode: z.string().min(10, "Legacy code is required").max(10000),
// });

// // Function to convert legacy code to modern code
// export async function convertCode(parsedData:any) {
//   const validatedFields = convertCodeSchema.safeParse(parsedData)

//   if(!validatedFields.success){
//     return {
//       Error: validatedFields.error.flatten().fieldErrors,
//       message: 'Please correct the errors and submit again'
//   }
//   const {legacyLang,modernLang,legacyCode} =validatedFields.data
//   const chatSession = await createChatSession();

//   const convertedCode = await chatSession.sendMessage(`
//       Convert this legacy code ${legacyCode} written in ${legacyLang}
//       into modern code language ${modernLang}.
//       Provide the entire code with no explanation,

//     `);

//   const responseText = convertedCode.response
//     .text()
//     .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

//   const generateDocs = await chatSession.sendMessage(`
//      write me the documentation of this code with examples write what does the code do, what are the methods, functions do, but don't write code along  ${responseText}

//     `);

//   const responseText2 = generateDocs.response
//     .text()
//     .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

//   return {
//     msg: "generated success",
//     generatedCode: responseText.trim(),
//     documentation: responseText2 ? responseText2.trim() : "",
//   };
// }

// // zod schema for signup

"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";

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

const convertCodeSchema = z.object({
  legacyLang: z.string().min(3, "Legacy language is required").max(20),
  modernLang: z.string().min(3, "Modern language is required").max(20),
  legacyCode: z.string().min(10, "Legacy code is required").max(10000),
});

type ConvertCodeInput = z.infer<typeof convertCodeSchema>;

export async function convertCode(parsedData: any) {
  const validatedFields = convertCodeSchema.safeParse(parsedData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and submit again",
    };
  }

  const { legacyLang, modernLang, legacyCode } = validatedFields.data;
  const chatSession = await createChatSession();

  try {
    const convertedCode = await chatSession.sendMessage(`
      Convert this legacy code ${legacyCode} written in ${legacyLang} 
      into modern code language ${modernLang}. 
      Provide the entire code with no explanation.
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

    return {
      success: true,
      generatedCode: responseText.trim(),
      documentation: responseText2 ? responseText2.trim() : "",
    };
  } catch (error) {
    console.error("Error in code conversion:", error);
    return {
      success: false,
      message: "An error occurred during code conversion",
    };
  }
}
