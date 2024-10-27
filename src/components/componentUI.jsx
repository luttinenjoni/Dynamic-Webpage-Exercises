import React, { useState } from "react";
import SearchInput from "./SearchComponent";

function PokemonInfo() {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    setPokemonData(data);
  };

  return (
    <div>
      <SearchInput onSearch={fetchPokemon} />
      {pokemonData ? (
        <img src={pokemonData.sprites.front_default} alt="Pokemon sprite" />
      ) : (
        <p>Loading Pokémon data...</p>
      )}
      
    </div>
  );
}

export default PokemonInfo;

