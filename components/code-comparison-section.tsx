import Image from "next/image";
import CodeEditor from "@/components/code-editor";
import img from "@/public/goole.png";
interface CodeComparisonSectionProps {
  title: string;
  description: string;
  leftTitle?: string;
  rightTitle?: string;
  leftCode: string;
  rightCode: string;
  showPartners?: boolean;
}

export default function CodeComparisonSection({
  title,
  description,
  leftTitle = "Legacy Code",
  rightTitle = "Modern Code",
  leftCode,
  rightCode,
  showPartners = true,
}: CodeComparisonSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        <p className="mb-12 text-center text-gray-600">{description}</p>
        <CodeEditor
          leftTitle={leftTitle}
          rightTitle={rightTitle}
          leftCode={leftCode}
          rightCode={rightCode}
        />
      </div>
    </section>
  );
}
