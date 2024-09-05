import { z } from "zod";

 

export const convertSchemaInput = z.object({
  legacyLanguage: z
    .string()
      .min(1, { message: "legacy Language is required" }),

    code: z.string().min(1, { message: "legacy  Code is required" }),

    modernLanguage: z
      .string()
      .min(1, { message: "Modern Language is required" }),
  });

  
