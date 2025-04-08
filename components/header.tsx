import Link from "next/link";
import { Button } from "./ui/button";
import AuthButton from "@/app/pages/authBotton";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center">
        <span className="text-xl font-bold">Lego</span>
        <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          AI
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          How it works
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Pricing
        </Link>
      </nav>
      <AuthButton />
    </header>
  );
}
