import { z, ZodError } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, "Name is required").max(20),
  email: z.string().email("Email is required"),
  password: z.string().min(8, "Password is required").max(20),
});

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  msg?: string | null;
};

export async function signup(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
