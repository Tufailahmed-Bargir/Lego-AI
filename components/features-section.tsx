import FeatureCard from "@/components/feature-card";
import { Zap, Code, LineChart, Lock, RefreshCw, Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Everything you need to modernize your codebase
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-600">
          Our AI-powered platform handles the entire code modernization process,
          from analysis to transformation.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Zap}
            title="AI-Powered Conversion"
            description="Our advanced AI algorithms analyze your code structure and patterns to create clean, modern implementations."
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
          />
          <FeatureCard
            icon={Code}
            title="Multi-Language Support"
            description="Works with multiple programming languages and frameworks, ensuring comprehensive coverage of your tech stack."
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
          />
          <FeatureCard
            icon={LineChart}
            title="Performance Insights"
            description="Get detailed reports on performance improvements and code quality metrics after conversion."
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
          />
          <FeatureCard
            icon={Lock}
            title="Security Improvements"
            description="Identifies security vulnerabilities in legacy code and implements modern security practices."
            iconColor="text-red-600"
            iconBgColor="bg-red-100"
          />
          <FeatureCard
            icon={RefreshCw}
            title="Environment Migration"
            description="Smoothly transition your codebase to modern environments, frameworks, and new tech stacks."
            iconColor="text-yellow-600"
            iconBgColor="bg-yellow-100"
          />
          <FeatureCard
            icon={Check}
            title="Best Practices"
            description="Ensures all transformed code follows industry best practices and maintains consistent standards."
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
}
