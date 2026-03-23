import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import TheProblem from "@/src/components/TheProblem";
import HowItWorks from "@/src/components/HowItWorks";
import BuiltForEveryone from "@/src/components/BuiltForEveryone";
import ReadyToBuild from "@/src/components/ReadyToBuild";
import Footer from "@/src/components/Footer";
import ParallaxCards from "@/src/components/ParallaxCards";

export default function Home() {
  return (
    <main className="pt-[73px]">
      <Header />
      <Hero />
      <TheProblem />
      <ParallaxCards />
      <HowItWorks />
      <BuiltForEveryone />
      <ReadyToBuild />
      <Footer />
    </main>
  );
}
