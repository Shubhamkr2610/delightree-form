import { useRef, useState } from "react";
import CustomInput from "./CustomInput";
import ShowFormData from "./ShowFormData";
import {
  Button,
  Center,
  Container,
  Flex,
  Text,
  useBoolean,
} from "@chakra-ui/react";

const CustomForm = () => {
  const [showData, setShowData] = useState(false);
  const [isLoading, setLoading] = useBoolean(false);
  const formRef = useRef(null);

  const submithander = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = formRef.current.getFormData();
    console.log(formRef.current.getFormData());

    if (!formData.firstName) {
      formRef.current.setError("firstName", "First Name can't be blank");
    }
    if (!formData.lastName) {
      formRef.current.setError("lastName", "Last Name  can't be blank");
    }
    if (!formData.email) {
      formRef.current.setError("email", "Email can't be blank");
    }
    if (!formData.phone) {
      formRef.current.setError("phone", "Phone can't be blank");

    }
    if (!formData.dateOfBirth) {
      formRef.current.setError("dateOfBirth", "Date Of Birth can't be blank");
      return; // this return should always be  in the last
    }
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
      setShowData(true);
    }, 3000);

  };
  return (
    <div>
      <Center>
        <Text fontWeight="bold" fontSize="4xl">
          User Details
        </Text>
      </Center>
      <Container
        maxW="50%"
        bg="brand.primary"
        paddingX="8"
        paddingTop="12"
        paddingBottom="6"
        borderRadius="xl"
      >
        <form onSubmit={submithander}>
          <Text fontWeight="bold" fontSize="xl" marginBottom="2">
            Basic Details
          </Text>
          <CustomInput ref={formRef} />
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
      {showData && <ShowFormData ref={formRef} />}
    </div>
  );
};

export default CustomForm;
