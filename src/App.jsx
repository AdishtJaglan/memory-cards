import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <PokemonCard id={1} />
      <PokemonCard id={2} />
      <PokemonCard id={3} />
      <PokemonCard id={4} />
      <PokemonCard id={5} />
      <PokemonCard id={6} />
      <PokemonCard id={7} />
      <PokemonCard id={8} />
    </>
  );
}

export default App;
