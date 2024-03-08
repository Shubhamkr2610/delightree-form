import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
const FormDataDisplay = React.memo(({ formData }) => {
    const { firstName, lastName, dateOfBirth, gender, mobileNumber, email, techStack, } = formData;
    return (_jsxs(Container, { maxW: "50%", bg: "brand.primary", paddingX: "8", paddingTop: "12", paddingBottom: "6", borderRadius: "xl", marginTop: "4", children: [_jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["First Name: ", firstName && firstName] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Last Name: ", lastName && lastName] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Mobile Number: ", mobileNumber && mobileNumber] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Email: ", email && email] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Gender: ", gender?.value && gender.value] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Birthday: ", dateOfBirth && dateOfBirth] }), _jsxs(Flex, { flexWrap: "wrap", align: "center", children: [_jsx(Text, { fontWeight: "bold", fontSize: "lg", paddingRight: "3", children: "Tech Stack:" }), !!techStack?.length &&
                        techStack.map((item, index) => item.tech && (_jsxs(Text, { marginRight: "2", fontWeight: "bold", fontSize: "lg", children: [index + 1, ". ", item.tech] }, index)))] })] }));
});
export default FormDataDisplay;
