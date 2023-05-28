import React from "react";
import { CardForm } from "./form";
import { CgClose } from "react-icons/cg";
import { CardDisplay } from "./card-image";
import { Box, IconButton } from "@chakra-ui/react";
import { Flex, Container } from "@chakra-ui/react";
import { Header } from "./header";

export const Card = () => {
  return (
    <Container
      m="auto"
      py="3rem"
      bg="white"
      maxW="1000px"
      position="relative"
      pb={{ base: "6rem" }}
      px={{ base: "1.8rem", md: "4rem", lg: "3rem" }}
    >
      <Flex
        mx="auto"
        gap="2.5rem"
        mt="1.5rem"
        width="100%"
        justify="space-between"
        wrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
      >
        <Box
          width={{ base: "100%", md: "100%", lg: "100%" }}
          m={{ base: "0 auto", md: "0 auto", lg: "0 auto" }}
        >
          <Header />
          <CardForm />
        </Box>

        <CardDisplay />
      </Flex>
      <IconButton
        top="0"
        right="0"
        size="lg"
        border="none"
        bg="#69696905"
        fontSize="xl"
        variant="outline"
        aria-label="Close"
        position="absolute"
        icon={<CgClose />}
      />
    </Container>
  );
};

// darkBg: #17254c
// blueBg: #035fff

/* <Input
  h="62px"
  type="password"
  color="darkblue"
  fontWeight="700"
  fontSize="2xl"
  borderRadius="8px"
  placeholder="......."
  _placeholder={{ color: "darkblue", fontWeight: "700" }}
/>; */
