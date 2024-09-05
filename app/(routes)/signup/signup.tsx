"use client";
import { useFormState } from "react-dom";
import { signup } from "@/app/(routes)/signup/signup-action";
import { useFormStatus } from "react-dom";

export function SignupForm() {
  const { pending } = useFormStatus();
  const initialState = { msg: "", error: undefined };
  const [state, formAction] = useFormState(signup, initialState);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>
      <button aria-disabled={pending} type="submit" className="mt-2 w-full">
        {pending ? "Submitting..." : "Login"}
      </button>
      {state.msg && <p className="mt-4 text-red-500">{state.msg}</p>}
    </form>
  );
}
