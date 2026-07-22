import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Aboutpage from "./components/aboutpage"
import Services from "./components/service"
import Contactpage from "./components/contact";
import Whatsappcall from "./components/whatsappCall";



export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />

      <Aboutpage />

      <Services />
      <Whatsappcall />



      <div className="flex items-center justify-center w-full p-10">
        <Contactpage />
      </div>
    </>
  );
}
