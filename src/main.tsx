import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { objectTheme } from "./theme";

const colors = {
      "green": {
        "50": "#F3FEE7",
        "100": "#DCFCBB",
        "200": "#C6FA8F",
        "300": "#B0F863",
        "400": "#99F637",
        "500": "#83F40B",
        "600": "#69C309",
        "700": "#4F9207",
        "800": "#346204",
        "900": "#1A3102"
      },
      "gray": {
        "50": "#F0F2F5",
        "100": "#D5D9E2",
        "200": "#B9C1CF",
        "300": "#9EA9BD",
        "400": "#8391AA",
        "500": "#687997",
        "600": "#536179",
        "700": "#3E495B",
        "800": "#29303D",
        "900": "#15181E"
  },
  brand: {
    primary: "#a6f750",
  },
};

const theme = extendTheme({ 
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors,
  ...objectTheme
});




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
