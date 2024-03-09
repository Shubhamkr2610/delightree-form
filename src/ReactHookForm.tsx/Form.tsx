// @ts-nocheck
import {
  Input,
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  Flex,
  Button,
  InputRightElement,
  useBoolean,
  FormErrorMessage,
  InputLeftElement,
  Stack,
  Spacer,
  Center,
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import FormDataDisplay from "./FormDataDisplay";
import { genderOptions, inputStyles } from "../constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Form = () => {
  const [isLoading, setLoading] = useBoolean(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "techStack",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,}$/;

  const onSubmit = (data, event) => {
    event.preventDefault();
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
    }, 3000);
  };

  useEffect(() => {
    if (fields.length === 0) {
      append({ tech: "", deletable: false });
    }
  }, []);

  return (
    <>
      <Center>
        <Text fontWeight="bold" fontSize="4xl">
          User Details
        </Text>
      </Center>
      <Flex justifyContent="flex-end">
        <Link to="/"> Check custom form ➡️</Link>
      </Flex>
      <Container
        maxW="50%"
        bg="brand.primary"
        paddingX="8"
        paddingTop="12"
        paddingBottom="6"
        borderRadius="xl"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text fontWeight="bold" fontSize="xl" marginBottom="2">
            Basic Details
          </Text>
          <Flex gap="6">
            <FormControl isInvalid={!!errors?.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input
                {...register("firstName", {
                  required: " First Name is required",
                })}
                placeholder="Enter First Name"
                {...inputStyles}
              />
              <FormErrorMessage>
              {errors?.firstName ? errors?.firstName.message : null}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input
                {...register("lastName", { required: "Last Name is required" })}
                placeholder="Enter Last Name"
                {...inputStyles}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex gap="6">
            <FormControl isInvalid={!!errors.mobileNumber}>
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
                  placeholder="Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: phoneRegex,
                      message: "Invalid phone number",
                    },
                  })}
                  {...inputStyles}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.mobileNumber && errors.mobileNumber.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Invalid email address",
                  },
                })}
                {...inputStyles}
              />
              <FormErrorMessage>
                {errors?.email && errors?.email?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Text fontWeight="bold" fontSize="xl" marginY="2">
            Other information
          </Text>
          <Flex gap="6">
            <Controller
              control={control}
              name="gender"
              rules={{ required: "Please enter at least one food group." }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <FormControl isInvalid={!!error} id="gender">
                  <FormLabel>Gender</FormLabel>

                  <Select
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    options={genderOptions}
                    placeholder="Select Gender"
                  />

                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <FormControl isInvalid={!!errors.dateOfBirth}>
              <FormLabel htmlFor="birthday">Date of Birth</FormLabel>
              <input
                type="date"
                id="dateOfBirth"
                {...register("dateOfBirth", {
                  required: "Date of Birth is required",
                })}
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
                {errors?.dateOfBirth && errors?.dateOfBirth.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Stack spacing="3" w="50%" paddingRight="3" marginBottom="3">
            <Flex align="center">
              <FormLabel margin="0">Tech stack</FormLabel>
              <Spacer h="10" />
              <Button
                onClick={() => append({ tech: "", deletable: true })}
                bg="transparent"
                size="md"
                _hover={{ bg: "transparent" }}
                padding="0"
              >
                <AddIcon />
              </Button>
            </Flex>

            {fields.map((item, index) => (
              <FormControl key={item.id} isInvalid={!!errors.techStack}>
                <InputGroup>
                  <Input
                    placeholder="Enter tech stack"
                    {...register(`techStack.${index}.tech`, {
                      required: "tech Stack is required",
                    })}
                    {...inputStyles}
                  />
                  {item?.deletable && (
                    <InputRightElement onClick={() => remove(index)}>
                      <CloseIcon boxSize={3} />
                    </InputRightElement>
                  )}
                </InputGroup>
                <FormErrorMessage>
                  {errors?.techStack && errors?.techStack[index]?.tech?.message}
                </FormErrorMessage>
              </FormControl>
            ))}
          </Stack>
          <Flex justifyContent="flex-end">
            <Button
              isLoading={isLoading}
              bg="brand.secondary"
              color="white"
              size="md"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Container>
      <FormDataDisplay formData={getValues()} />
    </>
  );
};

export default Form;
