import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx";
import ServiceArchitecture from "../components/ServiceArchitecture.jsx";
import CaseStudy from "../components/CaseStudies.jsx"
import NibloSection from "../components/NibloSection.jsx";
import WhyNGT from "../components/WhyNGT.jsx";
import WhereWeFit from "../components/WhereWeFit.jsx"
import Footer from "@/components/Footer.jsx";
export default function Home() {
  return (
    <div className="min-w-3xl">
      <Header />
      <Hero />
      <WhyNGT />
      <NibloSection />
      <ServiceArchitecture />
      <CaseStudy />
      <WhereWeFit />
      <Footer />
    </div>
  );
}
