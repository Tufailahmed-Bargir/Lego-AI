import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center">
        <span className="text-xl font-bold">Logo</span>
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
      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Sign in
        </Link>

        <Link href="/convert">
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </Link>
      </div>
    </header>
  );
}
