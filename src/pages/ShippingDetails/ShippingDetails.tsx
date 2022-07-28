import { Heading, HStack, Box, useToast } from "@chakra-ui/react";
import { PAGES } from "config";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { postOrder } from "services/order";
import { MinifigType } from "types/minifig";
import { ShippingDetailsForm } from "./ShippingDetailsForm";
import { Summary } from "./Summary";
import { getShippingDetailsFormSchema } from "./utils/getShippingDetailsFormSchema";

const initialValues = {
  name: "",
  surname: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

const shippingDetailsFormSchema = getShippingDetailsFormSchema();

interface LocationState {
  minifig: MinifigType;
}

export const ShippingDetails = () => {
  const location = useLocation();
  const { minifig } = location.state as LocationState;

  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shippingDetailsFormSchema}
      onSubmit={async (values) => {
        try {
          await postOrder(values);

          navigate(PAGES.MAIN);
        } catch (e) {
          toast({
            title: "Failed",
            description: "Something went wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <HStack
            alignItems="flex-start"
            justifyContent="stretch"
            spacing={20}
            my={10}
          >
            <Box w="70%">
              <Heading
                size="lg"
                textTransform="uppercase"
                color="white"
                mb="12"
              >
                Shipping Details
              </Heading>
              <ShippingDetailsForm />
            </Box>
            <Box w="30%" minH="100vh">
              <Summary minifig={minifig} />
            </Box>
          </HStack>
        </form>
      )}
    </Formik>
  );
};
