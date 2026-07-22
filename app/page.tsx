import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Whatsappcall from "./components/whatsappCall";

const Aboutpage = dynamic(() => import("./components/aboutpage"));
const Services = dynamic(() => import("./components/service"));
const Contactpage = dynamic(() => import("./components/contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutpage />
      <Services />
      <Whatsappcall />
      <div className="flex items-center justify-center w-full px-4 py-8 sm:px-6 sm:py-10 md:p-10">
        <Contactpage />
      </div>
    </>
  );
}
