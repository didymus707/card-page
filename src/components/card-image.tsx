import Arc from "./arc";
import React from "react";
import OrderText from "./order-text";
import { BiWifi } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { Chip, MasterCard, Note } from "../primitives/icons";
import { BodyText, SmallText, Title } from "../primitives/typography";

export const CardDisplay = () => (
  <>
    <Box
      h={{ base: "470px", md: "470px" }}
      w={{ base: "100%", md: "100%", lg: "60%", xl: '30%' }}
    >
      {/* <Box w={["100%", "100%", "30%"]} h={{ base: "470px", md: "470px" }}> */}
      <Box
        w='17rem'
        position="relative"
        className="card-image-detail"
        m={{ base: "0 auto", md: "0 auto", lg: " 0 auto" }}
      >
        <Box
          as="span"
          top="-1.5"
          m="0 auto"
          width="20%"
          right="25%"
          left="25%"
          bg="#367fff"
          rounded="sm"
          height="0.6rem"
          display="block"
          position="absolute"
          boxShadow="0 8px 4px 1px #367fff"
        />
        <Flex
          w={{ base: "11.5rem" }}
          h="16.5rem"
          pt="2rem"
          m="0 auto"
          pb="1.2rem"
          px="1.5rem"
          bg="#ffffffeb"
          zIndex="1000"
          direction="column"
          position="relative"
          borderRadius="0.75rem"
          boxShadow="0px 5px 50px -12px rgba(0, 0, 0, 0.25)"
        >
          <Flex justify="space-between">
            <Chip bg="#d2d2d2" boxSize="2rem" borderRadius="8px" />
            <Icon as={BiWifi} boxSize="2rem" />
          </Flex>
          <Box mt="auto" mb="1.2rem">
            <SmallText>Jonathan Michael</SmallText>
            <BodyText fontWeight="bold">
              <Box as="span" mr="0.75rem">
                ••••
              </Box>{" "}
              3456
            </BodyText>
          </Box>
          <Flex justify="space-between" align="center">
            <SmallText fontWeight="bold" color="darkblue">
              09/22
            </SmallText>
            <MasterCard boxSize="2.4rem" />
          </Flex>
        </Flex>
        <Box
          w="100%"
          p="2rem"
          h="28rem"
          top="78px"
          rounded="lg"
          display="flex"
          bg="#f0f3f8"
          flexDir="column"
          position="absolute"
        >
          <Flex flexDir="column" mt="auto" width="100%" mb="2.5rem">
            <OrderText title="Company" value="Apple" icon={FaApple} />
            <OrderText title="Order Number" value="1266201" />
            <OrderText title="Product" value="MacBook Air" />
            <OrderText title="VAT (20%)" value="$100.00" />
          </Flex>
          <Box
            right="0"
            left="0"
            bottom="6.5rem"
            position="absolute"
            border="1px dashed #b8b8b8"
            display="flex"
          >
            <Arc right="-6.6%" />
            <Arc left="-6.6%" />
          </Box>
          <Box>
            <SmallText color="#8e96a3" fontWeight="bold">
              You have to pay
            </SmallText>
            <Flex align="baseline" justify="space-between">
              <Title fontWeight="black">
                549
                <SmallText as="span" fontSize="sm" fontWeight="semibold">
                  .99
                </SmallText>
                <SmallText
                  as="span"
                  fontSize="sm"
                  color="#8e96a3"
                  fontWeight="semibold"
                >
                  {" "}
                  USD
                </SmallText>
              </Title>
              <Note boxSize="1.6rem" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);
