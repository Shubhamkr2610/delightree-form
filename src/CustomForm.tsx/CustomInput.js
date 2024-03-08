import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, Stack, Text, } from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { inputStyles, genderOptions } from "../constants";
import { Select } from "chakra-react-select";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
const CustomInput = forwardRef((_, ref) => {
    const [isError, setIsError] = useState({});
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const dateOfBirth = useRef(null);
    const genderRef = useRef(null);
    const techStackRefs = useRef([]);
    const [fields, setFields] = useState([{ id: 0, isDeletable: false }]);
    useImperativeHandle(ref, () => {
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
            setError: (type, errorMsg) => {
                setIsError((prev) => ({ ...prev, [type]: errorMsg }));
            },
        };
    }, []);
    const changeHandler = (e) => {
        setIsError((prev) => ({ ...prev, [e.target.name]: "" }));
    };
    const appendInput = () => {
        setFields((prev) => [
            ...prev,
            { id: prev[prev?.length - 1]?.id + 1, isDeletable: true },
        ]);
    };
    const removeInput = (index) => {
        techStackRefs.current.splice(index, 1);
        setFields((prevFields) => {
            const updatedFields = [...prevFields];
            updatedFields.splice(index, 1);
            return updatedFields;
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Flex, { gap: "6", children: [_jsxs(FormControl, { isInvalid: !!isError?.firstName, children: [_jsx(FormLabel, { children: "First Name" }), _jsx(Input, { name: "firstName", ref: firstName, placeholder: "Enter First Name", onChange: changeHandler, ...inputStyles }), _jsx(FormErrorMessage, { children: isError?.firstName && isError?.firstName })] }), _jsxs(FormControl, { isInvalid: !!isError?.lastName, children: [_jsx(FormLabel, { children: "Last Name" }), _jsx(Input, { name: "lastName", ref: lastName, placeholder: "Enter Last Name", onChange: changeHandler, ...inputStyles }), _jsx(FormErrorMessage, { children: isError?.lastName && isError?.lastName })] })] }), _jsxs(Flex, { gap: "6", children: [_jsxs(FormControl, { isInvalid: !!isError?.phone, children: [_jsx(FormLabel, { children: "Mobile Number" }), _jsxs(InputGroup, { children: [_jsx(InputLeftElement, { pointerEvents: "none", color: "white", fontWeight: "medium", children: "+91" }), _jsx(Input, { type: "tel", name: "phone", ref: phone, placeholder: "Mobile Number", onChange: changeHandler, ...inputStyles })] }), _jsx(FormErrorMessage, { children: isError?.phone && isError?.phone })] }), _jsxs(FormControl, { isInvalid: !!isError?.email, children: [_jsx(FormLabel, { children: "Email" }), _jsx(Input, { type: "email", name: "email", ref: email, placeholder: "Email", onChange: changeHandler, ...inputStyles }), _jsx(FormErrorMessage, { children: isError?.email && isError?.email })] })] }), _jsx(Text, { fontWeight: "bold", fontSize: "xl", marginY: "2", children: "Other information" }), _jsxs(Flex, { gap: "6", children: [_jsxs(FormControl, { isInvalid: !!isError?.gender, children: [_jsx(FormLabel, { children: "Gender" }), _jsx(Select, { ref: genderRef, name: "gender", onChange: (value) => {
                                    setIsError((prev) => ({ ...prev, gender: "" }));
                                    genderRef.current = value;
                                }, options: genderOptions, placeholder: "Select Gender", ...inputStyles }), _jsx(FormErrorMessage, { children: isError?.gender && isError?.gender })] }), _jsxs(FormControl, { isInvalid: !!isError?.dateOfBirth, children: [_jsx(FormLabel, { htmlFor: "birthday", children: "Date of Birth" }), _jsx("input", { type: "date", name: "dateOfBirth", onChange: changeHandler, ref: dateOfBirth, style: {
                                    width: "100%",
                                    backgroundColor: "#d9d9d9",
                                    color: "white",
                                    fontWeight: "medium",
                                    borderRadius: "0.375rem",
                                    padding: "0.5rem",
                                    border: "none",
                                    outline: "none",
                                } }), _jsx(FormErrorMessage, { children: isError?.dateOfBirth && isError?.dateOfBirth })] })] }), _jsxs(Stack, { spacing: "3", w: "50%", paddingRight: "3", marginBottom: "3", children: [_jsxs(Flex, { align: "center", children: [_jsx(FormLabel, { margin: "0", children: "Tech stack" }), _jsx(Spacer, { h: "10" }), _jsx(Button, { onClick: appendInput, bg: "transparent", size: "md", _hover: { bg: "transparent" }, padding: "0", children: _jsx(AddIcon, {}) })] }), fields.map((item, index) => (_jsxs(FormControl, { isInvalid: isError[`techStacks[${index}]`], children: [_jsxs(InputGroup, { children: [_jsx(Input, { placeholder: "Enter tech stack", ref: (el) => (techStackRefs.current[index] = el), ...inputStyles, onChange: () => setIsError((prev) => ({
                                            ...prev,
                                            [`techStacks[${index}]`]: "",
                                        })) }), item?.isDeletable && (_jsx(InputRightElement, { onClick: () => removeInput(index), children: _jsx(CloseIcon, { boxSize: 3 }) }))] }), _jsx(FormErrorMessage, { children: isError[`techStacks[${index}]`] && (_jsx(_Fragment, { children: isError[`techStacks[${index}]`] })) })] }, item.id)))] })] }));
});
export default CustomInput;
