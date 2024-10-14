import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Cards />
      <Footer />
    </>
  );
}
