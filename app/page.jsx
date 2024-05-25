import Services from "@/components/Servicces/Services";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/Whats/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
