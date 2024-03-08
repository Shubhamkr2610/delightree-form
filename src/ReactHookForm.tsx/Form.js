import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Input, Container, FormControl, FormLabel, InputGroup, Flex, Button, InputRightElement, useBoolean, FormErrorMessage, InputLeftElement, Stack, Spacer, Center, Text, } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import FormDataDisplay from "./FormDataDisplay";
import { genderOptions, inputStyles } from "../constants";
import { useEffect } from "react";
const Form = () => {
    const [isLoading, setLoading] = useBoolean(false);
    const { register, formState: { errors }, handleSubmit, control, getValues, } = useForm();
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
    return (_jsxs(_Fragment, { children: [_jsx(Center, { children: _jsx(Text, { fontWeight: "bold", fontSize: "4xl", children: "User Details" }) }), _jsx(Container, { maxW: "50%", bg: "brand.primary", paddingX: "8", paddingTop: "12", paddingBottom: "6", borderRadius: "xl", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(Text, { fontWeight: "bold", fontSize: "xl", marginBottom: "2", children: "Basic Details" }), _jsxs(Flex, { gap: "6", children: [_jsxs(FormControl, { isInvalid: !!errors?.firstName, children: [_jsx(FormLabel, { children: "First Name" }), _jsx(Input, { ...register("firstName", {
                                                required: " First Name is required",
                                            }), placeholder: "Enter First Name", ...inputStyles }), _jsx(FormErrorMessage, { children: errors?.firstName ? errors?.firstName.message : null })] }), _jsxs(FormControl, { isInvalid: !!errors?.lastName, children: [_jsx(FormLabel, { children: "Last Name" }), _jsx(Input, { ...register("lastName", { required: "Last Name is required" }), placeholder: "Enter Last Name", ...inputStyles }), _jsx(FormErrorMessage, { children: errors.lastName && errors.lastName.message })] })] }), _jsxs(Flex, { gap: "6", children: [_jsxs(FormControl, { isInvalid: !!errors.mobileNumber, children: [_jsx(FormLabel, { children: "Mobile Number" }), _jsxs(InputGroup, { children: [_jsx(InputLeftElement, { pointerEvents: "none", color: "white", fontWeight: "medium", children: "+91" }), _jsx(Input, { type: "tel", placeholder: "Mobile Number", ...register("mobileNumber", {
                                                        required: "Mobile number is required",
                                                        pattern: {
                                                            value: phoneRegex,
                                                            message: "Invalid phone number",
                                                        },
                                                    }), ...inputStyles })] }), _jsx(FormErrorMessage, { children: errors.mobileNumber && errors.mobileNumber.message })] }), _jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { children: "Email" }), _jsx(Input, { type: "email", placeholder: "Email", ...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: emailRegex,
                                                    message: "Invalid email address",
                                                },
                                            }), ...inputStyles }), _jsx(FormErrorMessage, { children: errors?.email && errors?.email?.message })] })] }), _jsx(Text, { fontWeight: "bold", fontSize: "xl", marginY: "2", children: "Other information" }), _jsxs(Flex, { gap: "6", children: [_jsx(Controller, { control: control, name: "gender", rules: { required: "Please enter at least one food group." }, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { error }, }) => (_jsxs(FormControl, { isInvalid: !!error, id: "gender", children: [_jsx(FormLabel, { children: "Gender" }), _jsx(Select, { name: name, ref: ref, onChange: onChange, onBlur: onBlur, value: value, options: genderOptions, placeholder: "Select Gender" }), _jsx(FormErrorMessage, { children: error && error.message })] })) }), _jsxs(FormControl, { isInvalid: !!errors.dateOfBirth, children: [_jsx(FormLabel, { htmlFor: "birthday", children: "Date of Birth" }), _jsx("input", { type: "date", id: "dateOfBirth", ...register("dateOfBirth", {
                                                required: "Date of Birth is required",
                                            }), style: {
                                                width: "100%",
                                                backgroundColor: "#d9d9d9",
                                                color: "white",
                                                fontWeight: "medium",
                                                borderRadius: "0.375rem",
                                                padding: "0.5rem",
                                                border: "none",
                                                outline: "none",
                                            } }), _jsx(FormErrorMessage, { children: errors?.dateOfBirth && errors?.dateOfBirth.message })] })] }), _jsxs(Stack, { spacing: "3", w: "50%", paddingRight: "3", marginBottom: "3", children: [_jsxs(Flex, { align: "center", children: [_jsx(FormLabel, { margin: "0", children: "Tech stack" }), _jsx(Spacer, { h: "10" }), _jsx(Button, { onClick: () => append({ tech: "", deletable: true }), bg: "transparent", size: "md", _hover: { bg: "transparent" }, padding: "0", children: _jsx(AddIcon, {}) })] }), fields.map((item, index) => (_jsxs(FormControl, { isInvalid: !!errors.techStack, children: [_jsxs(InputGroup, { children: [_jsx(Input, { placeholder: "Enter tech stack", ...register(`techStack.${index}.tech`, {
                                                        required: "tech Stack is required",
                                                    }), ...inputStyles }), item?.deletable && (_jsx(InputRightElement, { onClick: () => remove(index), children: _jsx(CloseIcon, { boxSize: 3 }) }))] }), _jsx(FormErrorMessage, { children: errors?.techStack && errors?.techStack[index]?.tech?.message })] }, item.id)))] }), _jsx(Flex, { justifyContent: "flex-end", children: _jsx(Button, { isLoading: isLoading, bg: "brand.secondary", color: "white", size: "md", type: "submit", children: "Submit" }) })] }) }), _jsx(FormDataDisplay, { formData: getValues() })] }));
};
export default Form;
