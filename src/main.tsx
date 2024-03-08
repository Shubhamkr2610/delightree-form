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
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
