import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <div className="rounded-lg p-6">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}
      >
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
