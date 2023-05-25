import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { Card } from "./components/card";
import Bg from "../public/bg.jpg";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      bgImage="url('/bg.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Card />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
