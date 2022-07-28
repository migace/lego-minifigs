import {
  HStack,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import { Field } from "formik";

export const ShippingDetailsForm = () => (
  <VStack alignItems="stretch" spacing={4}>
    <HStack spacing={10}>
      <FormControl>
        <FormLabel color="white">Name</FormLabel>
        <Field as={Input} name="name" bg="white" />
      </FormControl>
      <FormControl>
        <FormLabel color="white">Surname</FormLabel>
        <Field as={Input} name="surname" bg="white" />
      </FormControl>
    </HStack>
    <FormControl>
      <FormLabel color="white">Phone number</FormLabel>
      <InputGroup>
        <InputLeftAddon children="+48" />
        <Field as={Input} type="tel" name="phoneNumber" bg="white" />
      </InputGroup>
    </FormControl>
    <FormControl>
      <FormLabel color="white">Email</FormLabel>
      <Field as={Input} type="email" name="email" bg="white" />
    </FormControl>
    <FormControl>
      <FormLabel color="white">Date of birth</FormLabel>
      <Field as={Input} name="dateOfBirth" bg="white" />
    </FormControl>
    <FormControl>
      <FormLabel color="white">Address</FormLabel>
      <Field as={Input} name="address" bg="white" />
    </FormControl>
    <FormControl>
      <FormLabel color="white">City</FormLabel>
      <Field as={Input} name="city" bg="white" />
    </FormControl>
    <HStack spacing={10}>
      <FormControl>
        <FormLabel color="white">State</FormLabel>
        <Field as={Input} name="state" bg="white" />
      </FormControl>
      <FormControl>
        <FormLabel color="white">Zip Code</FormLabel>
        <Field as={Input} name="zipCode" bg="white" />
      </FormControl>
    </HStack>
  </VStack>
);
