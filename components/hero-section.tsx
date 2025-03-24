import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            AI-powered legacy code conversion
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Transform legacy code into modern, maintainable code with AI
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Logo AI analyzes your legacy codebase and intelligently converts it
            to modern standards, making it easier to maintain, extend, and
            scale.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/convert">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="flex items-center">
              Try Demo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
