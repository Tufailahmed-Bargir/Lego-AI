// import Features from "./components/features";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import Overview from "./components/Overview";
// import Hero from "./components/hero";
// import { Toaster } from "sonner";
// export default function Home() {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-pink-50 to-blue-50">
//         {/* <Navbar /> */}
//         <Hero />
//         <Overview />
//         <Features />
//         <Footer />
//         <Toaster />
//       </div>
//     </>
//   );
// }

import { redirect } from "next/navigation";

export default function page() {
  redirect("/signup");
}
