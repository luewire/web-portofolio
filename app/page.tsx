import Hero from "@/components/Hero";
import VerticalMarquee from "@/components/VerticalMarquee";
import ProjectsHorizontal from "@/components/ProjectsHorizontal";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <VerticalMarquee />
      <Hero />
      <ProjectsHorizontal />
      <Experience />
      <Footer />
    </main>
  );
}
