import { Badge, Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IPokemon } from "../resultsList/interfaces";

const Pokemon = ({ information }: { information: IPokemon }) => {
  const image =
    information.sprites?.other?.dream_world?.front_default ??
    information.sprites?.front_default;
  return (
    <Box
      overflowX="auto"
      padding="1em"
      borderColor="lightblue"
      borderWidth="thin"
      margin="1em"
      borderRadius="1em"
      backgroundColor="white"
    >
      <HStack>
        <Image boxSize="8em" objectFit="fill" src={image} />
        <Stack>
          <Text fontSize="2xl" fontWeight="semibold">
            {information.name}
          </Text>
          <HStack color="mediumaquamarine" marginBlockEnd="1em">
            {information.stats?.map((stat, ix) => (
              <Badge fontSize="0.5em" colorScheme="blue" key={ix}>
                <Text fontSize="lg">
                  <span style={{ fontWeight: "bold" }}>{stat.stat?.name}</span>{" "}
                  {stat.base_stat}
                </Text>
              </Badge>
            ))}
          </HStack>
          <Text fontSize="xl">{information.base_experience} exp</Text>
        </Stack>
      </HStack>
    </Box>
  );
};

export default Pokemon;
