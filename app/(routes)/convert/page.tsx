"use client";
import { useState } from "react";
import { convertCode } from "./action";
import { toast, Toaster } from "sonner";
import SubmitButton from "@/app/components/Button";
import { convertSchemaInput } from "@/lib/Schemas";

export default function ConvertPage() {
  const [outputCode, setOutputCode] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [showForm, setShowForm] = useState(true);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  };

  const pageAction = async (formData: FormData) => {
    const data = {
      legacyLanguage: formData.get("legacyCodeLang"),
      modernLanguage: formData.get("modernCodeLang"),
      code: formData.get("code"),
    };
    console.log("frontned data", data);
    const parsedData = convertSchemaInput.safeParse(data);
    console.log("parsedData", parsedData);
    if (!parsedData.success) {
      let errorMessage = "";
      parsedData.error.issues.forEach((issue, index) => {
        errorMessage += `${issue.path[0]} : ${issue.message}\n`;
      });
      toast.error(errorMessage);
      console.log("Invalid data", errorMessage);
    } else {
      console.log("Data is valid" + parsedData.data);
      const result = await convertCode(parsedData.data);
      console.log(result);
      if (result.data.success) {
        toast.error(result.msg);
      } else {
        setOutputCode(result?.generatedCode || "");
        setDocumentation(result?.documentation || "");
        setShowForm(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-50 to-blue-50">
      <Toaster position="top-right" closeButton richColors />
      {showForm ? (
        <form
          action={pageAction}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 font-semibold">
                Select Legacy Code Language
              </label>
              <input
                name="legacyCodeLang"
                id="legacyCodeLang"
                placeholder="Ex: Cobol, Delphi, Perl etc"
                className="p-2 bg-white border border-gray-300 rounded w-full"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 font-semibold">
                Select Modern Code Language
              </label>
              <input
                name="modernCodeLang"
                id="modernCodeLang"
                placeholder="Ex: C, C++, Python, JAVA"
                className="p-2 bg-white border border-gray-300 rounded w-full"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded resize-none"
              rows={10}
              name="code"
              id="code"
              placeholder="Your legacy code here"
            ></textarea>
          </div>
          <SubmitButton />
        </form>
      ) : (
        <div className="mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { title: "Converted Code", content: outputCode },
              { title: "Documentation", content: documentation },
            ].map(({ title, content }) => (
              <div key={title} className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl">
                    {title}:
                  </h3>
                  <button
                    onClick={() => copyToClipboard(content)}
                    className="bg-gray-200 hover:bg-gray-300 hover:underline text-gray-700 rounded p-2 text-sm transition duration-300 ease-in-out"
                  >
                    Copy
                  </button>
                </div>
                <pre className="p-2 border overflow-x-auto font-mono text-sm sm:text-base bg-gray-50 rounded h-[300px] lg:h-[400px]">
                  {content}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
