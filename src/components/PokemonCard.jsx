/* eslint-disable react/prop-types */
import axios from "axios";
import "../styles/PokemonCard.css";
import { useEffect, useState } from "react";

export default function PokemonCard({ id }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        setName(response.data.name);
        setImgUrl(response.data.sprites.other.dream_world.front_default);
      } catch (err) {
        console.log("error fetching data: " + err.message);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="poke-card">
      <div className="poke-image">
        <img src={imgUrl} />
      </div>
      <div className="poke-name">{name}</div>
    </div>
  );
}
