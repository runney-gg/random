import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
    </main>
  );
}