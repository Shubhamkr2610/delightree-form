import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
//extend the theme
const colors = {
    brand: {
        primary: "#f0eeee",
        secondary: "#d9d9d9",
    },
};
const theme = extendTheme({ colors });
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ChakraProvider, { theme: theme, children: _jsx(App, {}) }) }));
