import React from "react";
import NoResults from "../resources/NoResults";
import Pokemon from "../resources/Pokemon";
import useLoadPokemon from "./hooks/useLoadPokemon";
import "./ResultsList.css";

const ResultsList = () => {
  const { pokemon, results } = useLoadPokemon();
  return (
    <div className="resultsContainer">
      {results && results.length === 0 ? (
        <NoResults name={pokemon} />
      ) : (
        results?.map((pokemon, ix) => (
          <Pokemon information={pokemon} key={ix} />
        ))
      )}
    </div>
  );
};

export default ResultsList;
