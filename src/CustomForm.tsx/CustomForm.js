import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import CustomInput from "./CustomInput";
import ShowFormData from "./ShowFormData";
import { Button, Center, Container, Flex, Text, useBoolean, } from "@chakra-ui/react";
const CustomForm = () => {
    const [showData, setShowData] = useState(false);
    const [isLoading, setLoading] = useBoolean(false);
    const formRef = useRef(null);
    const validateTechStack = (techStacks) => {
        let errorCount = 0;
        techStacks?.forEach((element, index) => {
            if (!element) {
                errorCount = +1;
                formRef?.current?.setError(`techStacks[${index}]`, "Input Can't be blank");
            }
        });
        return errorCount;
    };
    const submithander = (e) => {
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
        if (totalErrorCount > 0)
            return;
        setLoading.on();
        setTimeout(() => {
            setLoading.off();
            setShowData(true);
        }, 3000);
    };
    return (_jsxs("div", { children: [_jsx(Center, { children: _jsx(Text, { fontWeight: "bold", fontSize: "4xl", children: "User Details" }) }), _jsx(Container, { maxW: "50%", bg: "brand.primary", paddingX: "8", paddingTop: "12", paddingBottom: "6", borderRadius: "xl", children: _jsxs("form", { onSubmit: submithander, children: [_jsx(Text, { fontWeight: "bold", fontSize: "xl", marginBottom: "2", children: "Basic Details" }), _jsx(CustomInput, { ref: formRef }), _jsx(Flex, { justifyContent: "flex-end", children: _jsx(Button, { isLoading: isLoading, bg: "brand.secondary", color: "white", size: "md", type: "submit", children: "Submit" }) })] }) }), showData && _jsx(ShowFormData, { ref: formRef })] }));
};
export default CustomForm;
