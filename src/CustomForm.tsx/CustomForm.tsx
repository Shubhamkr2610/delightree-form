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
import { Link } from "react-router-dom";

const CustomForm = () => {
  const [showData, setShowData] = useState(false);
  const [isLoading, setLoading] = useBoolean(false);
  const formRef = useRef<HTMLFormElement>(null);
  const validateTechStack = (techStacks: string[]) => {
    let errorCount = 0;

    techStacks?.forEach((element, index) => {
      if (!element) {
        errorCount = +1;
        formRef?.current?.setError(
          `techStacks[${index}]`,
          "Input Can't be blank"
        );
      }
    });
    return errorCount;
  };
  const submithander = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let totalErrorCount = 0;
    setShowData(false);
    const formData = formRef?.current?.getFormData();
    if (!formData.firstName) {
      formRef?.current?.setError("firstName", "First Name can't be blank");
      totalErrorCount++;
    }
    if (!formData.lastName) {
      formRef?.current?.setError("lastName", "Last Name  can't be blank");
      totalErrorCount++;
    }
    if (!formData.email) {
      formRef?.current?.setError("email", "Email can't be blank");
      totalErrorCount++;
    }
    if (!formData.phone) {
      formRef?.current?.setError("phone", "Phone can't be blank");
      totalErrorCount++;
    }
    if (!formData.dateOfBirth) {
      formRef?.current?.setError("dateOfBirth", "Date Of Birth can't be blank");
      totalErrorCount++;
    }
    if (!formData.gender) {
      formRef?.current?.setError("gender", "Gender can't be blank");
      totalErrorCount++;
    }
    if (formData?.techStacks?.length > 0) {
      const isError = validateTechStack(formData?.techStacks);
      totalErrorCount += isError;
    }
    if (totalErrorCount > 0) return;
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
      <Flex justifyContent="flex-end">
        <Link to="/form-by-using-inBuilt-hook">
          Check form built react hook ➡️
        </Link>
      </Flex>
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
