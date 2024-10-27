import React from "react";
import PokemonInfo from "./components/componentUI";

function App() {
  return (
    <div className="App">
      <h1>Pokémon Information</h1>
      <p>Search for a pokémon and get a picture of it. For example try search for pikachu.</p>
      <PokemonInfo></PokemonInfo>
    </div>
  );
}

export default App;
