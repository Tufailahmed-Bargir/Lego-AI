import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
      <button
        type="submit"
        className="mt-4 w-full p-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Converting..." : "Convert"}
      </button>
  );
}