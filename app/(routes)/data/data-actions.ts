"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
const schema = z.object({
  name: z
    .string()
    .min(3)
    .trim()
    .regex(/^[a-zA-Z ]*$/, {
      message: "Name must contain only letters and spaces",
    }),

  password: z
    .string()
    .min(6)
    .trim()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
      },
    ),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

const existingUsers = "bbb@gmail.com";
export async function dataAction(parsedData: any) {
  console.log("parsedData", parsedData);

  const validatedFields = schema.safeParse(parsedData);
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and submit again",
    };
  }
  console.log("hello from server");
  if (validatedFields.data.email === existingUsers) {
    return {
      error: true,
      message: "User already exists",
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword is : ", hashedPassword);
  console.log("password is : ", password);
  console.log("name is : ", name);
  console.log("email is : ", email);
}
