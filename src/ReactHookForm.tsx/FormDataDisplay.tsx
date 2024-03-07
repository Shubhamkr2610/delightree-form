import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
interface TechStackItem {
  tech: string;
  deletable: boolean;
}
interface FormDataDisplayProps {
  formData: {
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    email?: string;
    gender?: { value: string };
    dateOfBirth?: string;
    techStack?: TechStackItem[];
  };
}
const FormDataDisplay: React.FC<FormDataDisplayProps> = React.memo(
  ({ formData }) => {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      mobileNumber,
      email,
      techStack,
    } = formData;

    return (
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
          Gender: {gender?.value && gender.value}
        </Text>

        <Text fontWeight="bold" fontSize="lg">
          Birthday: {dateOfBirth && dateOfBirth}
        </Text>

        <Flex flexWrap="wrap" align="center">
          <Text fontWeight="bold" fontSize="lg" paddingRight="3">
            Tech Stack:
          </Text>
          {!!techStack?.length &&
            techStack.map(
              (item, index) =>
                item.tech && (
                  <Text key={index} marginRight="2" fontWeight="bold" fontSize="lg">
                    {index + 1}. {item.tech}
                  </Text>
                )
            )}
        </Flex>
      </Container>
    );
  }
);

export default FormDataDisplay;
