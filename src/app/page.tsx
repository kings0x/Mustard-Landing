import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import TheProblem from "@/src/components/TheProblem";
import HowItWorks from "@/src/components/HowItWorks";
import MilestoneAccounting from "@/src/components/MilestoneAccounting";
import Testimonials from "@/src/components/Testimonials";
import ReadyToBuild from "@/src/components/ReadyToBuild";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="pt-[73px]">
      <Header />
      <Hero />
      <TheProblem />
      <HowItWorks />
      <MilestoneAccounting />
      <Testimonials />
      <ReadyToBuild />
      <Footer />
    </main>
  );
}
