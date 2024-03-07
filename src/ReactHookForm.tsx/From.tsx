import {
  Input,
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Flex,
  Button,
  InputRightElement,
  useBoolean,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { CloseIcon } from "@chakra-ui/icons";
import { Controller, useForm } from "react-hook-form";

const From = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [isLoading, setLoading] = useBoolean(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = (data) => {
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
      console.log(data);
    }, 1200);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>User Details</h2>
          <h3>Basic Details</h3>
          <Flex>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                {...register("firstName", { required: true })}
                placeholder="Enter First Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                {...register("lastName", { required: true })}
                placeholder="Enter Last Name"
              />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+91</InputLeftAddon>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("mobileNumber", { required: true })}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </FormControl>
          </Flex>
          Other information
          <Flex>
            {/* <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    // name="gender"
                    // id="gender"
                    options={genderOptions}
                    placeholder="Select Gender"
                    size="md"
                    {...register("gender")}
                  />
                </FormControl> */}
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
            <FormControl>
              <FormLabel htmlFor="birthday">Date of Birth</FormLabel>
              <input
                type="date"
                id="birthday"
                {...register("birthday")}
              ></input>
            </FormControl>
          </Flex>
          {/* <FormControl>
              <FormLabel>Tech stack +</FormLabel>
              <InputGroup>
                <Input placeholder="Enter tech stack" />
                <InputRightElement>
                  <CloseIcon boxSize={3} />
                </InputRightElement>
              </InputGroup>
            </FormControl> */}
          <Button
            isLoading={isLoading}
            colorScheme="teal"
            size="md"
            type="submit"
          >
            Button
          </Button>
        </form>
      </Container>
    </>
  );
};

export default From;
