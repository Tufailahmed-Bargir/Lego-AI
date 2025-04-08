import HistoryCard from "@/app/pages/HistoryCard";
import { prisma } from "@/lib/prisma";
import Header from "@/components/header";
import Footer from "@/components/footer";

const HistoryPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.history.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                No History Found
              </h1>
              <p className="text-gray-600">
                The requested conversion history could not be found.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Conversion Details
          </h1>
          <HistoryCard history={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
