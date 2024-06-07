
import Services from "@/components/Servicces/Services";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/Whats/WhatsappButton";
import Partners from "@/components/partners/Partners";
import Banner2 from "@/components/Banner/Banner2";
import AboutUs from "@/components/AboutUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner2 />
      <Services />
      <Partners />
      <WhatsappButton />
      <AboutUs/>
      <Footer/>
    </div>
  );
}
