import React from "react";

function SearchInput({ onSearch }) {
  return (
    <div>
      <input id="PokemonName" type="text" placeholder="Enter a Pokémon" />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchInput;

