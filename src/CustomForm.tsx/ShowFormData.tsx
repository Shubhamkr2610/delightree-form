import { Container, Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const ShowFormData = forwardRef((_, ref:any) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    mobileNumber,
    email,
    techStacks,
  } = ref?.current?.getFormData();
  return (
    <>
      <Container
        maxW="50%"
        bg="brand.primary"
        paddingX="8"
        paddingTop="12"
        paddingBottom="6"
        borderRadius="xl"
        marginTop="4"
      >
        <Text fontWeight="bold" fontSize="lg">
          First Name: {firstName && firstName}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Last Name: {lastName && lastName}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Mobile Number: {mobileNumber && mobileNumber}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Email: {email && email}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Gender: {gender && gender}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Birthday: {dateOfBirth && dateOfBirth}
        </Text>

        <Flex flexWrap="wrap" align="center">
          <Text fontWeight="bold" fontSize="lg" paddingRight="3">
            Tech Stack:
          </Text>
          {!!techStacks?.length &&
            techStacks.map((item: string, index: number) => (
              <Text key={index} marginRight="2" fontWeight="bold" fontSize="lg">
                {index + 1}. {item}
                <br />
              </Text>
            ))}
        </Flex>
      </Container>
    </>
  );
});
export default ShowFormData;
