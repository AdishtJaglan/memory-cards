import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header";
import createArray from "./createArray";

function App() {
  const ids = createArray();
  return (
    <>
      <Header />
      {ids.map((id) => (
        <PokemonCard id={id} key={id} />
      ))}
    </>
  );
}

export default App;
