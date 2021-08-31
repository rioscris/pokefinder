import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useLoadPokemon from "./hooks/useLoadPokemon";
import IPokemon from "./interfaces";
import "./ResultsList.css";

const NoResults = ({ name }: { name: string }) => {
  return (
    <Heading>
      Oops. No pudimos encontrar ningun pokemon llamado {name} :(
    </Heading>
  );
};

const Pokemon = ({ information }: { information: IPokemon }) => {
  return (
    <Box>
      <Heading>Nombre: {information.name}</Heading>
    </Box>
  );
};

const ResultsList = () => {
  const {pokemon, loadedInformation} = useLoadPokemon();
  return (
    <div className="resultsContainer">
      {!loadedInformation ? <NoResults name={pokemon} /> : <Pokemon information={loadedInformation} />}
    </div>
  );
};

export default ResultsList;
