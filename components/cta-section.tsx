import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-blue-600 py-16 text-white md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Ready to modernize your codebase?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl">
          Start converting your legacy code today and move to technical
          debt-free with our AI-powered platform.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
