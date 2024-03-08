import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { inputStyles, genderOptions } from "../constants";
import { Select } from "chakra-react-select";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
interface selectGenderRef {
  value: string;
  label: string;
}

const CustomInput = forwardRef((_, ref) => {
  const [isError, setIsError] = useState<any>({});
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const dateOfBirth = useRef<HTMLInputElement>(null);
  const genderRef = useRef<any>(null);
  const techStackRefs = useRef<HTMLInputElement[]>([]);
  const [fields, setFields] = useState([{ id: 0, isDeletable: false }]);
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
            dateOfBirth: dateOfBirth?.current?.value,
            gender: genderRef?.current?.value,
            techStacks: techStackRefs.current?.map((item) => item.value),
          };
        },
        setError: (type: any, errorMsg: any) => {
          setIsError((prev: any) => ({ ...prev, [type]: errorMsg }));
        },
      };
    },
    []
  );
  const changeHandler = (e: any) => {
    setIsError((prev: any) => ({ ...prev, [e.target.name]: "" }));
  };

  const appendInput = () => {
    setFields((prev) => [
      ...prev,
      { id: prev[prev?.length - 1]?.id + 1, isDeletable: true },
    ]);
  };
  const removeInput = (index: number) => {
    techStackRefs.current.splice(index, 1);
    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
  };
  return (
    <>
      <Flex gap="6">
        <FormControl isInvalid={!!isError?.firstName}>
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
        <FormControl isInvalid={!!isError?.lastName}>
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
        <FormControl isInvalid={!!isError?.phone}>
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

        <FormControl isInvalid={!!isError?.email}>
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
        <FormControl isInvalid={!!isError?.gender}>
          <FormLabel>Gender</FormLabel>
          <Select
            ref={genderRef}
            name="gender"
            onChange={(value: selectGenderRef) => {
              setIsError((prev: any) => ({ ...prev, gender: "" }));
              genderRef.current = value;
            }}
            options={genderOptions}
            placeholder="Select Gender"
            {...inputStyles}
          />
          <FormErrorMessage>
            {isError?.gender && isError?.gender}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!isError?.dateOfBirth}>
          <FormLabel htmlFor="birthday">Date of Birth</FormLabel>
          <input
            type="date"
            name="dateOfBirth"
            onChange={changeHandler}
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
      <Stack spacing="3" w="50%" paddingRight="3" marginBottom="3">
        <Flex align="center">
          <FormLabel margin="0">Tech stack</FormLabel>
          <Spacer h="10" />
          <Button
            onClick={appendInput}
            bg="transparent"
            size="md"
            _hover={{ bg: "transparent" }}
            padding="0"
          >
            <AddIcon />
          </Button>
        </Flex>

        {fields.map((item, index) => (
          <FormControl
            key={item.id}
            isInvalid={isError[`techStacks[${index}]`]}
          >
            <InputGroup>
              <Input
                placeholder="Enter tech stack"
                ref={(el: HTMLInputElement) =>
                  (techStackRefs.current[index] = el)
                }
                {...inputStyles}
                onChange={() =>
                  setIsError((prev: any) => ({
                    ...prev,
                    [`techStacks[${index}]`]: "",
                  }))
                }
              />
              {item?.isDeletable && (
                <InputRightElement onClick={() => removeInput(index)}>
                  <CloseIcon boxSize={3} />
                </InputRightElement>
              )}
            </InputGroup>
            <FormErrorMessage>
              {isError[`techStacks[${index}]`] && (
                <>{isError[`techStacks[${index}]`]}</>
              )}
            </FormErrorMessage>
          </FormControl>
        ))}
      </Stack>
    </>
  );
});

export default CustomInput;
