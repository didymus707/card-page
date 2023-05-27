import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { Card } from "./components/card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      bgSize='174%'
      bgRepeat="no-repeat"
      bgImage="url('/bg.jpg')"
      bgPosition="left 10% top 47%"
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