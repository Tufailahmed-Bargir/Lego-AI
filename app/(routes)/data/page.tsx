"use client";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { dataAction } from "./data-actions";
import { useRouter } from "next/navigation";

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
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .trim(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}

export default function Data() {
  const router = useRouter();

  const clientAction = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
      email: formData.get("email"),
    };

    const parsedData = schema.safeParse(data);
    console.log(parsedData);

    if (!parsedData.success) {
      let errorMessage = "";
      parsedData.error.issues.forEach((issue, index) => {
        errorMessage += `${issue.path[0]} : ${issue.message}\n`;
      });
      toast.error(errorMessage);
      console.log("Invalid data", errorMessage);
    } else {
      console.log("Data is valid");
      const result = await dataAction(parsedData.data);

      if (result?.error) {
        toast.error(result?.message);
      } else {
        // toast.success("account created successfully")
        toast.success("account created successfully");
        console.log(result);
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    }
  };

  return (
    <>
      <form action={clientAction} className="mt-40">
        <Toaster position="top-right" closeButton richColors />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <input name="email" id="email" placeholder="Enter your email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <SubmitButton />
      </form>
    </>
  );
}
