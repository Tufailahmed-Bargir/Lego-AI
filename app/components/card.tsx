import Link from "next/link";

interface BlogCardProps {
  id: string;
  legacy_language: string;
  modern_language: string;
  legacy_code: string;
  converted_code: string;
  documentation: string;
  createdAt: string;
}

export const HistoryCard = ({ data }: { data: BlogCardProps }) => {
  return (
    <Link href={`/history/${data.id}`}>
      <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="">
            <Avatar size={"small"} name={"ahmed"} />
          </div>
          <div className="font-bold pl-2 text-sm flex justify-center flex-col">
            {data.legacy_language}
          </div>
          <div className="pl-2 flex justify-center flex-col mt-1">
            {/* <Circle /> */}
            ----&gt;
          </div>
          <div className="font-bold pl-2 text-sm flex justify-center flex-col">
            {data.modern_language}
          </div>
        </div>
        <div className="text-2xl font-semibold pt-2">{data.converted_code}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center 
    overflow-hidden bg-gray-400 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
    >
      <span
        className={`${size === "small" ? "text-xs" : "text-md"} font-small text-gray-900 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
