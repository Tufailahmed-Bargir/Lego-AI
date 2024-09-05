import { SignupForm } from "@/app/(routes)/signup/signup";
export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
