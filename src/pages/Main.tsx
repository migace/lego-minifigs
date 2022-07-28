import { Button, Center, Heading } from "@chakra-ui/react";
import { PAGES } from "config";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <Center flexDir="column" h="100%">
      <Heading size="2xl" textTransform="uppercase" color="white" mb="12">
        Lego minifigs mystery box
      </Heading>
      <Button colorScheme="blue" onClick={() => navigate(PAGES.CHOOSE_MINIGS)}>
        Let's go!
      </Button>
    </Center>
  );
};
