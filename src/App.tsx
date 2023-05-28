import * as React from "react";
import { Card } from "./components/card";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";

const breakpoints = {
  sm: "19.6875em",
  md: "40em", //640px
  lg: "48em", //768px
  xl: "62em", //992px
  "2xl": "80em",
};

const mtheme = extendTheme({ breakpoints });

export const App = () => (
  <ChakraProvider theme={mtheme}>
    <Box
      bgSize="174%"
      bgImage="url('/bg.jpg')"
      bgRepeat={{ base: "repeat", md: "no-repeat" }}
      bgPosition={{ base: "center", md: "left 10% top 47%" }}
    >
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Card />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

// background-image: url(/bg.jpg);
//     -webkit-background-position: center;
//     background-repeat: no-repeat;
//     background-size: 167%;
//     background-position: left top 47%;
// }
