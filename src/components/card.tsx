import React, { useState } from "react";
import { CardForm } from "./form";
import { CgClose } from "react-icons/cg";
import { CardDisplay } from "./card-image";
import { Box, IconButton } from "@chakra-ui/react";
import { Flex, Container } from "@chakra-ui/react";
import { Header } from "./header";

export const Card = () => {
  const [year, setYear] = useState<string>("22");
  const [month, setMonth] = useState<string>("09");
  const [number, setNumber] = useState<string>("2411 1244 8756 0917");

  const handleNumber = (event: any) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, "").slice(0, 43);

    let formattedNumber = "";
    for (let i = 0; i < formattedValue.length; i += 4) {
      formattedNumber += formattedValue.slice(i, i + 4) + " ";
    }
    formattedNumber = formattedNumber.trim();

    setNumber(formattedNumber);
  };

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMonth(e.target.value);

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value);

  const last4 = number.replace(/\D/g, "").slice(-4);

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
          <CardForm
            year={year}
            month={month}
            number={number}
            setNumber={setNumber}
            handleYear={handleYear}
            handleMonth={handleMonth}
            handleNumber={handleNumber}
          />
        </Box>

        <CardDisplay month={month} year={year} last4={last4} />
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
