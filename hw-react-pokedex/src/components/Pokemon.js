import React from "react";
import { useState, useEffect } from "react";
function Pokemon(props) {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
          // console.log(data)
        });
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <li>
          <span>{`${pokemon.name}`}</span>
          <img
            src={`${pokemon.sprites.other.dream_world.front_default}`}
            alt={`${pokemon.name}`}
          />
        </li>
      )}
    </div>
  );
}

export default Pokemon;
