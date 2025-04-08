import HistoryList from "@/app/pages/HIstoryList";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HistoryPage({ params }: { params: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Conversion History
          </h1>
          <HistoryList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
