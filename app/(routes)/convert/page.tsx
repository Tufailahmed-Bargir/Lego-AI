"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { toast, Toaster } from "sonner";

import { convertSchemaInput, ConvertType } from "@/lib/Schemas";
import axios from "axios";

export default function ConvertPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(convertSchemaInput),
  });
  const [outputCode, setOutputCode] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  };

  const onSubmit = async (data: ConvertType) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/convert", data);

      if (response.data.success) {
        toast.success("Code converted successfully!");
        setOutputCode(response.data.generatedCode);
        setDocumentation(response.data.documentation);
        setShowForm(false);
      } else {
        toast.error("Error converting the code!");
      }
    } catch (error) {
      toast.error("Server error! Please try again.");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-50 to-blue-50">
      <Toaster position="top-right" closeButton richColors />
      {showForm ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 font-semibold">
                Select Legacy Code Language
              </label>
              <input
                {...register("legacyLanguage")}
                placeholder="Ex: Cobol, Delphi, Perl etc"
                className="p-2 bg-white border border-gray-300 rounded w-full"
              />
              {errors.legacyLanguage && (
                <p className="text-red-500 text-sm">
                  {errors.legacyLanguage.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 font-semibold">
                Select Modern Code Language
              </label>
              <input
                {...register("modernLanguage")}
                placeholder="Ex: C, C++, Python, JAVA"
                className="p-2 bg-white border border-gray-300 rounded w-full"
              />
              {errors.modernLanguage && (
                <p className="text-red-500 text-sm">
                  {errors.modernLanguage.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-4">
            <textarea
              {...register("code")}
              className="w-full p-4 border border-gray-300 rounded resize-none"
              rows={10}
              placeholder="Your legacy code here"
            ></textarea>
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
            )}
          </div>
          <button
            className="mt-4 w-full p-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            {loading ? "Converting..." : "Convert"}
          </button>
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
