import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Categories from "@/app/components/Categories/Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Cards />
    </>
  );
}
