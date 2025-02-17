import Features from "./components/features";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Overview from "./components/Overview";
import Hero from "./components/hero";
import { Toaster } from "sonner";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <div className="bg-gradient-to-r from-pink-50 to-blue-50">
        {/* <Navbar /> */}
        <Hero />
        {JSON.stringify(session)}
        <Overview />
        <Features />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
