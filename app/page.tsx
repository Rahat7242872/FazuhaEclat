import Image from "next/image";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeatureProduct";
import Hero from "./components/Hero";
import About from "./components/About";


export default function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <About/>
    </>
  );
}
