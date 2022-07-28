import {
  Button,
  Center,
  Heading,
  HStack,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Minifig } from "components/Minifig";
import { PAGES } from "config";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMinifigs } from "services/minifigs";
import { MinifigType } from "types/minifig";
import { getMultipleRandom } from "utils/getMultipleRandom";

export const ChooseMinigs = () => {
  const [randomMinifigs, setRandomMinifigs] = useState<MinifigType[]>([]);
  const [selectedMinifig, setSelectedMinifig] = useState<MinifigType>();

  const navigate = useNavigate();
  const toast = useToast();

  const clickMinifigHandler = useCallback(
    (minifig: MinifigType) => setSelectedMinifig(minifig),
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const minifigsData = await getMinifigs("harry potter");

        setRandomMinifigs(getMultipleRandom<MinifigType>(minifigsData, 3));
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
    <Center flexDir="column" h="100%">
      {randomMinifigs.length ? (
        <>
          <Heading size="lg" textTransform="uppercase" color="white" mb="12">
            Choose your minifig
          </Heading>
          <HStack spacing={8} mb="20">
            {randomMinifigs.map((minifig) => (
              <Minifig
                key={minifig.set_num}
                minifig={minifig}
                selected={minifig.set_num === selectedMinifig?.set_num}
                onClick={clickMinifigHandler}
              />
            ))}
          </HStack>
          <Button
            colorScheme="blue"
            textTransform="uppercase"
            disabled={!selectedMinifig?.set_num}
            onClick={() =>
              navigate(PAGES.SHIPPING_DETAILS, {
                state: { minifig: selectedMinifig },
              })
            }
          >
            Proceed to shipment
          </Button>
        </>
      ) : (
        <Spinner size="xl" />
      )}
    </Center>
  );
};
