import HistoryCard from "@/app/components/HistoryCard";
import { prisma } from "@/lib/prisma";

const HistoryPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.history.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    return <div> No history</div>;
  }

  return (
    <div className="p-6 mt-20">
      {/* @ts-ignore */}
      <HistoryCard history={data} />
    </div>
  );
};

export default HistoryPage;
