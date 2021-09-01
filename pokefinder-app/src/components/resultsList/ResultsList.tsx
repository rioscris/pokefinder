import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useLoadPokemon from "./hooks/useLoadPokemon";
import { IPokemon } from "./interfaces";
import "./ResultsList.css";

const NoResults = ({ name }: { name: string }) => {
  return (
    <Heading>
      Oops. No pudimos encontrar ningun pokemon llamado {name} :(
    </Heading>
  );
};

const Pokemon = ({ information }: { information: IPokemon }) => {
  return <Heading>Nombre: {information.name}</Heading>;
};

const ResultsList = () => {
  const { pokemon, results } = useLoadPokemon();
  return (
    <div className="resultsContainer">
      {!results ? (
        <NoResults name={pokemon} />
      ) : (
        results.map((pokemon, ix) => (
          <Box>
            <Pokemon information={pokemon} key={ix} />
          </Box>
        ))
      )}
    </div>
  );
};

export default ResultsList;
