import { Button } from "@/components/ui/button";

interface CodeEditorProps {
  leftTitle?: string;
  rightTitle?: string;
  leftCode: string;
  rightCode: string;
  buttonText?: string;
}

export default function CodeEditor({
  leftTitle = "Legacy Code",
  rightTitle = "Modern Code",
  leftCode,
  rightCode,
  buttonText = "Convert Code",
}: CodeEditorProps) {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-r border-b md:border-b-0">
          <div className="flex items-center border-b px-4 py-2">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500">{leftTitle}</span>
          </div>
          <div
            className="bg-gray-900 p-4 font-mono text-xs text-gray-300"
            style={{ minHeight: "300px" }}
          >
            <pre>{leftCode}</pre>
          </div>
        </div>
        <div>
          <div className="flex items-center border-b px-4 py-2">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500">{rightTitle}</span>
          </div>
          <div
            className="bg-gray-900 p-4 font-mono text-xs text-gray-300"
            style={{ minHeight: "300px" }}
          >
            <pre>{rightCode}</pre>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t p-4">
        <Button className="bg-blue-600 hover:bg-blue-700">{buttonText}</Button>
      </div>
    </div>
  );
}
