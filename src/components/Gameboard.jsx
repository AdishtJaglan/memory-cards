/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";

export default function Gameboard({ clicked, handleScore, ids }) {
  return (
    <>
      {ids.map((id, index) => (
        <PokemonCard
          id={id}
          key={id}
          onClick={() => handleScore(index)}
          isClicked={clicked[index]}
        />
      ))}
    </>
  );
}
