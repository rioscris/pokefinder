import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonState from "../../../reducers/interfaces";
import { pokeAPI } from "../../../resources/urls";
import { IPokemon, IPokemonData } from "../interfaces";

const getJson = (response: Response) => {
  return response.json() as Promise<any>;
};

const getPokemonCount = () =>
  fetch(pokeAPI)
    .then(getJson)
    .then((results) => {
      return results.count;
    });

const getPokemons = (count: number) =>
  fetch(`${pokeAPI}?limit=${count}`)
    .then(getJson)
    .then((json) => {
      return json.results;
    });

const filterResults = (
  pokemonList: Array<IPokemonData>,
  searchedPokemon: string
) =>
  pokemonList.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchedPokemon)
  );

const getPokemonsInformation = (list: Array<IPokemonData>) => {
  const foundPokemons = Array<IPokemon>();
  const promises = Array<Promise<any>>();
  list?.map((data) =>
    promises.push(
      fetch(data.url)
        .then(getJson)
        .then((info) => {
          return foundPokemons.push(info);
        })
    )
  );
  return Promise.all(promises).then(() => foundPokemons);
};

const useLoadPokemon = () => {
  const pokemon = useSelector((state: PokemonState) => state.pokemon);
  const [resultList, setResultList] = useState<Array<IPokemon>|null>(null);

  useEffect(() => {
    if (pokemon) {
      getPokemonCount()
        .then((totalCount) => getPokemons(totalCount))
        .then((results) => filterResults(results, pokemon))
        .then((coincidencies) => getPokemonsInformation(coincidencies))
        .then((pokemons) => setResultList(pokemons))
        .catch((error) => console.warn(error));
    }
  }, [pokemon]);

  return { pokemon, results: resultList };
};

export default useLoadPokemon;
