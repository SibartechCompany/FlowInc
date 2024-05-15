import Services from "@/components/Servicces/Services";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}
