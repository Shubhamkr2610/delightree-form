import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { inputStyles, genderOptions } from "../constants";
import { Select } from "chakra-react-select";

const CustomInput = forwardRef((_, ref) => {
  const [isError, setIsError] = useState({});
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const dateOfBirth = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        getFormData: () => {
          return {
            firstName: firstName?.current?.value,
            lastName: lastName?.current?.value,
            email: email?.current?.value,
            phone: phone?.current?.value,
            dateOfBirth: dateOfBirth?.current?.value
          };
        },
        setError: (type: any, errorMsg: any) => {
          setIsError((prev) => ({ ...prev, [type]: errorMsg }));
        },
      };
    },
    []
  );
  const changeHandler = (e: any) => {
    setIsError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <>
      <Flex gap="6">
        <FormControl isInvalid={isError?.firstName}>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            ref={firstName}
            placeholder="Enter First Name"
            onChange={changeHandler}
            {...inputStyles}
          />
          <FormErrorMessage>
            {isError?.firstName && isError?.firstName}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={isError?.lastName}>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            ref={lastName}
            placeholder="Enter Last Name"
            onChange={changeHandler}
            {...inputStyles}
          />
          <FormErrorMessage>
            {isError?.lastName && isError?.lastName}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap="6">
        <FormControl isInvalid={isError?.phone}>
          <FormLabel>Mobile Number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="white"
              fontWeight="medium"
            >
              +91
            </InputLeftElement>

            <Input
              type="tel"
              name="phone"
              ref={phone}
              placeholder="Mobile Number"
              onChange={changeHandler}
              {...inputStyles}
            />
          </InputGroup>
          <FormErrorMessage>
            {isError?.phone && isError?.phone}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={isError?.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            ref={email}
            placeholder="Email"
            onChange={changeHandler}
            {...inputStyles}
          />
          <FormErrorMessage>
            {isError?.email && isError?.email}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <Text fontWeight="bold" fontSize="xl" marginY="2">
        Other information
      </Text>
      <Flex gap="6">
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select
            name="gender"
            options={genderOptions}
            placeholder="Select some colors..."
          />
        </FormControl>
        <FormControl isInvalid={isError?.dateOfBirth}>
          <FormLabel htmlFor="birthday">Date of Birth</FormLabel>
          <input
            type="date"
            name="dateOfBirth"

            ref={dateOfBirth}
            style={{
              width: "100%",
              backgroundColor: "#d9d9d9",
              color: "white",
              fontWeight: "medium",
              borderRadius: "0.375rem",
              padding: "0.5rem",
              border: "none",
              outline: "none",
            }}
          />
          <FormErrorMessage>
            {isError?.dateOfBirth && isError?.dateOfBirth}
          </FormErrorMessage>
        </FormControl>
      </Flex>
    </>
  );
});

export default CustomInput;
