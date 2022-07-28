import { Box, Center, Image, Link, Text } from "@chakra-ui/react";
import { MinifigType } from "types/minifig";
import { MinifigImageWithName } from "./MinifigImageWithName";

type MinifigProps = {
  minifig: MinifigType;
  selected?: boolean;
  onClick: (minifig: MinifigType) => void;
};

export const Minifig = ({ minifig, selected, onClick }: MinifigProps) => {
  return (
    <Center
      borderRadius="md"
      bg="white"
      p={10}
      border="8px solid"
      borderColor={selected ? "orange.300" : "transparent"}
      cursor="pointer"
      onClick={() => onClick(minifig)}
      minW="250px"
      flexDir="column"
      _hover={{ borderColor: "orange.300" }}
    >
      <MinifigImageWithName
        imageSrc={minifig.set_img_url}
        name={minifig.name}
      />
      <Link
        target="_blank"
        href={minifig.set_url}
        fontSize="12px"
        color="orange.300"
        fontWeight="600"
        _hover={{ textDecor: "underline" }}
      >
        Show details
      </Link>
    </Center>
  );
};
