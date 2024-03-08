import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";
const ShowFormData = forwardRef((_, ref) => {
    const { firstName, lastName, dateOfBirth, gender, mobileNumber, email, techStacks, } = ref?.current?.getFormData();
    return (_jsx(_Fragment, { children: _jsxs(Container, { maxW: "50%", bg: "brand.primary", paddingX: "8", paddingTop: "12", paddingBottom: "6", borderRadius: "xl", marginTop: "4", children: [_jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["First Name: ", firstName && firstName] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Last Name: ", lastName && lastName] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Mobile Number: ", mobileNumber && mobileNumber] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Email: ", email && email] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Gender: ", gender && gender] }), _jsxs(Text, { fontWeight: "bold", fontSize: "lg", children: ["Birthday: ", dateOfBirth && dateOfBirth] }), _jsxs(Flex, { flexWrap: "wrap", align: "center", children: [_jsx(Text, { fontWeight: "bold", fontSize: "lg", paddingRight: "3", children: "Tech Stack:" }), !!techStacks?.length &&
                            techStacks.map((item, index) => (_jsxs(Text, { marginRight: "2", fontWeight: "bold", fontSize: "lg", children: [index + 1, ". ", item, _jsx("br", {})] }, index)))] })] }) }));
});
export default ShowFormData;
