import HistoryList from "@/app/components/HIstoryList";

export default function HistoryPage({ params }: { params: string }) {
  return (
    <div className="p-6 mt-20">
      <HistoryList />
    </div>
  );
}
