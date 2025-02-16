import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function HistoryList() {
  const historyData = await prisma.history.findMany({});
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 max-w-3xl w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Code Conversion History
      </h2>
      <div className="space-y-4">
        {historyData.map((item) => (
          <Link key={item.id} href={`/history/${item.id}`} className="block">
            <div className="p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <p className="text-gray-800 font-medium">
                {item.legacy_language} → {item.modern_language}
              </p>
              <p className="text-gray-600 text-sm">
                Created on: {new Date(item.createdAT).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
