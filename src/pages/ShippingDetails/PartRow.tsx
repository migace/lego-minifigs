import { Center, Flex, Image, Text } from "@chakra-ui/react";

type PartRowProps = {
  imageSrc: string;
  name: string;
  id: string;
};

export const PartRow = ({ imageSrc, name, id }: PartRowProps) => (
  <Flex w="100%">
    <Center h="50px" w="50px" flexShrink={0} mr={4}>
      <Image
        src={imageSrc}
        fallbackSrc="https://via.placeholder.com/50"
        h="50px"
        objectFit="cover"
      />
    </Center>
    <Flex flexDir="column" w="100%" alignItems="flex-start">
      <Text fontWeight={600} fontSize="12px" mb="2px">
        {name}
      </Text>
      <Text fontWeight={600} fontSize="12px" color="orange.300">
        {id}
      </Text>
    </Flex>
  </Flex>
);
