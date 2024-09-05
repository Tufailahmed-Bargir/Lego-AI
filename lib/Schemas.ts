import { z } from "zod";

export const convertSchema = z.object({
  legacyLanguage: z.string().min(1, { message: "legacy Language is required" }),

  Code: z.string().min(1, { message: "legacy  Code is required" }),

  modernLanguage: z.string().min(1, { message: "Modern Language is required" }),
});

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .regex(/^[a-zA-Z]+$/, { message: "Only alphabets are allowed" }),

  email: z.string().email({ message: "Email is required" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Only alphanumeric characters are allowed",
    }),
});

export const convertSchemaInput = z.object({
  legacyLanguage: z
    .string()
      .min(1, { message: "legacy Language is required" }),

    code: z.string().min(1, { message: "legacy  Code is required" }),

    modernLanguage: z
      .string()
      .min(1, { message: "Modern Language is required" }),
  });
