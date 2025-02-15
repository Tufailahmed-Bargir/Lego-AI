"use client";
import HistoryList from "@/app/components/HIstoryList";
import { useRouter } from "next/navigation";
// import HistoryList from "@/components/HistoryList";

const HistoryPage = () => {
  const router = useRouter();

  const handleSelect = (id: number) => {
    router.push(`/history/${id}`);
  };

  return (
    <div className="p-6 mt-20">
      <HistoryList onSelect={handleSelect} />
    </div>
  );
};

export default HistoryPage;
