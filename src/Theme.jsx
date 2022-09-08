import {extendTheme, theme as base} from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "500px",
  lg: "720px",
  xl: "960px",
  "2xl": "1200px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple", // default is gray
        // hover: " purple 300",
      },
    },

    Input: {
      defaultProps: {
        focusBorderColor: "white.500",
      },
    },
    Select: {
      baseStyle: {
        _focus: {
          backgroundColor: "white.500",
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "white.500",
      },
    },
  },
});
