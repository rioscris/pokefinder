import { Text } from "@chakra-ui/react";

const NoResults = ({ name }: { name: string }) => {
  return (
    <Text fontSize="2xl" fontWeight="semibold">
      Oops. No pudimos encontrar ningun pokemon llamado {name} :(
    </Text>
  );
};

export default NoResults;
