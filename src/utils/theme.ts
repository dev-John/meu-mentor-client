import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#3A1A70",
    200: "#53318A",
    300: "#EB2368",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
