import React from "react";
import { CardForm } from "./form";
import { BiWifi } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { Chip, MasterCard, Note } from "../primitives/icons";
import { Box, Flex, Icon, Container } from "@chakra-ui/react";
import { BodyText, SmallText, Title } from "../primitives/typography";
import { CgClose } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import OrderText from "./order-text";
import Arc from "./arc";

export const Card = () => {
  return (
    <Container
      m="auto"
      bg="white"
      px="3rem"
      py="3rem"
      maxW="1000px"
      position="relative"
    >
      <Flex width="100%" mx="auto" mt="1.5rem" justify="space-between">
        <CardForm />

        <Box w="30%">
          <Box className="card-image-detail" w="100%" position="relative">
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
              // display="none"
              w="70%"
              h="16rem"
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
