import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/Schemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("data ecived is ", data);

    const verifySchema = signupSchema.safeParse(data);
    if (!verifySchema.success) {
      return NextResponse.json(
        {
          msg: "invalid schema",
        },
        { status: 201 },
      );
    }

    const { name, email, password } = verifySchema.data;
    const UserExist = await prisma.user.findUnique({
      where: { email },
    });
    if (UserExist) {
      return NextResponse.json(
        {
          msg: "user alredy exists!",
        },
        { status: 201 },
      );
    }

    const hashPassowrd = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: { name, email, password: hashPassowrd },
    });

    return NextResponse.json(
      {
        msg: "user created success!",
        success: true,
        createUser,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({
      msg: "error foun" + error.message,
    });
  }
}
