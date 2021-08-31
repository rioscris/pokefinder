import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonState from "../../reducers/interfaces";
import "./ResultsList.css";

const ResultsList = () => {
  const pokemon = useSelector((state:PokemonState) => state.pokemon)
  useEffect(() => {
    if(pokemon){
      console.log(`Imma find a ${pokemon}!`)
    }
  }, [pokemon])
  return <div className="resultsContainer">Pokemons!</div>;
};

export default ResultsList;
