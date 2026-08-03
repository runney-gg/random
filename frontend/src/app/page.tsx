import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProductCategories from "@/components/sections/ProductCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ProductCategories />
    </main>
  );
}