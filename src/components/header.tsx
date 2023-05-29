import React from "react";
import { TimerNumber } from "./basix-comp";
import { FaCreditCard } from "react-icons/fa";
import { Title } from "../primitives/typography";
import { Box, Flex, Icon } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Flex align="center">
        <Flex align="center">
          <Flex
            bg="#367fff"
            rounded="full"
            align="center"
            justify="center"
            h={{ base: "2.4rem", md: "2.8rem" }}
            w={{ base: "2.4rem", md: "2.8rem" }}
          >
            <Icon
              top="2px"
              color="white"
              as={FaCreditCard}
              borderRadius="3px"
              position="relative"
              boxShadow="2.7px -2.7px 1px #cfcfef"
              boxSize={{ base: "0.75rem", md: "1rem" }}
              style={{ transform: "rotate(-21deg)" }}
            />
          </Flex>
          <Title
            fontWeight="bold"
            ml="0.5rem"
            fontSize={{ base: "1.2rem", md: "1.3125rem" }}
          >
            AceCoin
            <Box as="span" fontWeight="300">
              Pay
            </Box>
          </Title>
        </Flex>
        <Flex ml="auto" color="white" align="center">
          <TimerNumber mr="4px" num={0} />
          <TimerNumber num={1} />
          <Title mx="4px" color="#17254c">
            :
          </Title>
          <TimerNumber mr="4px" num={1} />
          <TimerNumber num={9} />
        </Flex>
      </Flex>
    </>
  );
};
