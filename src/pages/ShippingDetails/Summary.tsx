import { Box, Heading, VStack, Text, Button, useToast } from "@chakra-ui/react";
import { MinifigImageWithName } from "components/MinifigImageWithName";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { getMinifigParts } from "services/minifigs";
import { MinifigPartsType, MinifigType } from "types/minifig";
import { PartRow } from "./PartRow";

type SummaryProps = {
  minifig: MinifigType;
};

export const Summary = ({ minifig }: SummaryProps) => {
  const [parts, setParts] = useState<MinifigPartsType[]>([]);
  const { isValid } = useFormikContext();

  const toast = useToast();

  useEffect(() => {
    const getData = async () => {
      try {
        const partsData = await getMinifigParts(minifig.set_num);

        setParts(partsData);
      } catch (e) {
        toast({
          title: "Failed",
          description: "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    getData();
  }, []);

  return (
    <VStack bg="white" p={6} borderRadius="2xl" w="300px" h="100%" spacing={6}>
      <Heading
        as="h4"
        size="md"
        textTransform="uppercase"
        color="black"
        mb="12"
        w="100%"
      >
        Summary
      </Heading>
      <Box>
        <MinifigImageWithName
          imageSrc={minifig.set_img_url}
          name={minifig.name}
        />
      </Box>
      <Box w="100%">
        <Text mb={4} fontSize="12px" fontWeight={600}>
          There are {parts.length} parts in this minifig:
        </Text>
      </Box>
      {parts.map((part) => (
        <PartRow
          key={part.part.part_num}
          imageSrc={part.part.part_img_url}
          name={part.part.name}
          id={part.part.part_num}
        />
      ))}
      <Box>
        <Button
          mt={10}
          colorScheme="blue"
          textTransform="uppercase"
          disabled={!isValid}
          type="submit"
        >
          Proceed to shipment
        </Button>
      </Box>
    </VStack>
  );
};
