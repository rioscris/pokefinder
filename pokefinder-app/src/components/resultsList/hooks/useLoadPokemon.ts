import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonState from "../../../reducers/interfaces";
import { pokeAPI } from "../../../resources/urls";
import IPokemon from "../interfaces";

const useLoadPokemon = () => {
  const pokemon = useSelector((state: PokemonState) => state.pokemon);
  const [information, setInformation] = useState<IPokemon>({ name: "" });
  useEffect(() => {
    if (pokemon) {
      fetch(`${pokeAPI}/${pokemon}`)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((pokemonData) => {
          setInformation(pokemonData);
        });
    }
  }, [pokemon]);

  return { pokemon, loadedInformation: information };
};

export default useLoadPokemon;
