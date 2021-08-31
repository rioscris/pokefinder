import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Finder.css";

const Separator = () => {
  return (
    <div className="separator">
      <div className="dot" />
    </div>
  );
};

const PokemonForm = () => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent) => {
    dispatch({ type: "QUERY_POKEMON", payload: pokemon });
    event.preventDefault();
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Flex>
        <Input
          className="input"
          placeholder="Ingrese el nombre a buscar"
          onChange={(event) => setPokemon(event?.target?.value)}
        />
        <Box w="1%" />
        <Button className="button" type="submit">
          Buscar
        </Button>
      </Flex>
    </form>
  );
};

const Finder = () => {
  return (
    <>
      <Box className="container">
        <Box w="100%">
          <Heading>Pokemon Finder</Heading>
          <Text fontSize="xl">El que quiere Pokemons, que se los busque.</Text>
          <PokemonForm />
        </Box>
      </Box>
      <Separator />
    </>
  );
};

export default Finder;
