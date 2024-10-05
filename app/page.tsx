import Image from "next/image";
import Bg from "@/assets/images/landingPage1.jpg";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Analysis from "@/components/Analysis";
import AnalysisWriteup from "@/components/AnalysisWriteup";
import Satoshi from "@/components/Satoshi";
import SatoshiAnalysis from "@/components/SatoshiAnalysis";
import Reviews from "@/components/Reviews";
import AlphaCall from "@/components/AlphaCall";
import { Footer } from "@/components/Footer";
import { LazyLoad } from "@/components/LazyLoad";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src={Bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
      <div className="relative z-10">
      <Navbar />
          <ScrollAnimation>
          <Hero />
          </ScrollAnimation>
         <ScrollAnimation>
         <LazyLoad>
          <Services />
          </LazyLoad>
         </ScrollAnimation>

         <ScrollAnimation>
         <LazyLoad>
          <WhyUs />
          </LazyLoad>
         </ScrollAnimation>

            <ScrollAnimation>
            <LazyLoad>
         <Analysis />
         </LazyLoad>
            </ScrollAnimation>
          
          <ScrollAnimation> <LazyLoad><AnalysisWriteup/></LazyLoad></ScrollAnimation>
         <ScrollAnimation><LazyLoad> <Satoshi /></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad><SatoshiAnalysis/></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad>  <Reviews /> </LazyLoad></ScrollAnimation>
            <ScrollAnimation><LazyLoad> <AlphaCall/></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad><Footer /></LazyLoad></ScrollAnimation>
      </div>
    </div>
  );
}