import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/page/Home/Home";
import Solutions from "@/src/page/Solutions/Solutions";
import Methodology from "@/src/page/Methodology/Methodology";
import Benefit from "@/src/page/Benefit/Benefit";
import Footer from "@/src/components/Footer/Footer";
import RequestDemo from "@/src/components/RequestDemo/RequestDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Methodology />
      <Benefit />
      <Footer />
      <RequestDemo />
    </>
  );
}





