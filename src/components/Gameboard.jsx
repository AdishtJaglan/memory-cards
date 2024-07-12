/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";
import createArray from "../createArray";

const ids = createArray();

export default function Gameboard({ handleScore }) {
  return (
    <>
      {ids.map((id) => (
        <PokemonCard id={id} key={id} handleScore={handleScore} />
      ))}
    </>
  );
}
