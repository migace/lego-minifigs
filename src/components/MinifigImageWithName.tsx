import { Box, Image, Text } from "@chakra-ui/react";

type MinifigImageWithNameProps = {
  name: string;
  imageSrc?: string;
};

export const MinifigImageWithName = ({
  name,
  imageSrc,
}: MinifigImageWithNameProps) => (
  <>
    <Box h="150px" mb={4}>
      <Image
        h="150px"
        src={imageSrc}
        fallbackSrc="https://via.placeholder.com/150"
      />
    </Box>
    <Text
      maxW="150px"
      fontSize="12px"
      textAlign="center"
      fontWeight="600"
      mb={4}
    >
      {name}
    </Text>
  </>
);
