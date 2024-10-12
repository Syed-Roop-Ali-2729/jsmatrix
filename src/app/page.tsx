import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";

export default function Home() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Cards />
    </>
  );
}
