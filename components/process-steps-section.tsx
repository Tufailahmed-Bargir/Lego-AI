import ProcessStep from "@/components/process-step";

export default function ProcessStepsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Simple, powerful code transformation
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-600">
          Our integrated workflow provides makes it easy to modernize your
          legacy code in just a few steps.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ProcessStep
            number={1}
            title="Upload Your Code"
            description="Simply upload your legacy codebase through our secure platform or connect to your repository."
          />
          <ProcessStep
            number={2}
            title="AI Analysis"
            description="Our AI analyzes your code structure, patterns, and dependencies to create a comprehensive transformation plan."
          />
          <ProcessStep
            number={3}
            title="Get Modern Code"
            description="Receive your modernized codebase with detailed documentation and implementation guidance."
          />
        </div>
      </div>
    </section>
  );
}
