import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <Header>
        <NavBar />
      </Header> */}
      <Hero />
      <Cards />
    </>
  );
}
