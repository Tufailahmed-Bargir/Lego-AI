import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function HistoryList() {
  const historyData = await prisma.history.findMany({});

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-300 max-w-3xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Code Conversion History
      </h2>
      <div className="space-y-5">
        {historyData.map((item) => (
          <Link
            key={item.id}
            href={`/history/${item.id}`}
            className="block hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 rounded-lg transition-all duration-300 ease-in-out"
          >
            <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold text-gray-800">
                  {item.legacy_language} → {item.modern_language}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item.createdAT).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                Converted and stored for future reference.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
