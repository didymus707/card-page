import {
  Box,
  Flex,
  Icon,
  Input,
  Button,
  Container,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { SmallSubtitle, SmallText, Subtitle } from "../primitives/typography";
import { MdEdit } from "react-icons/md";
import { MastercardLogo, VBadge } from "../primitives/icons";
import { CgLayoutGridSmall } from "react-icons/cg";

export const Card = () => {
  return (
    <Container maxW="1000px" m="auto" bg="white" p='3rem'>
      <Flex width="100%" mx="auto">
        <Box width="65%">
          <Flex align="center">
            <Flex align="center">
              <Icon
                // p='1rem'
                as={MdEdit}
                bg="#035fff"
                border="none"
                color="white"
                rounded="full"
                boxSize="1rem"
              />
              <Subtitle fontWeight="bold" ml="1rem">
                AceCoin
                <Box as="span" fontWeight="300">
                  Pay
                </Box>
              </Subtitle>
            </Flex>
            <Flex ml="auto" color="white" align="center">
              <Subtitle
                mr="4px"
                w="1.8rem"
                bg="#17254c"
                display="flex"
                height="2.6rem"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
              >
                0
              </Subtitle>
              <Subtitle
                w="1.8rem"
                bg="#17254c"
                display="flex"
                height="2.6rem"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
              >
                1
              </Subtitle>
              <Subtitle mx="4px" color="#17254c">
                :
              </Subtitle>
              <Subtitle
                mr="4px"
                w="1.8rem"
                bg="#17254c"
                display="flex"
                height="2.6rem"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
              >
                1
              </Subtitle>
              <Subtitle
                w="1.8rem"
                bg="#17254c"
                display="flex"
                height="2.6rem"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
              >
                9
              </Subtitle>
            </Flex>
          </Flex>
          <Box className="card-area">
            <Box className="card-no">
              <Flex mt="3rem">
                <Box>
                  <SmallSubtitle mb="4px">Card Number</SmallSubtitle>
                  <SmallText color="#8e96a3">
                    Enter the 16-digit card number on the card
                  </SmallText>
                </Box>
                <Flex as="button" align="center" ml="auto">
                  <Icon as={MdEdit} color="blue.600" />
                  <Button
                    p="0"
                    variant="ghost"
                    colorScheme="blue"
                    _hover={{ bg: "none" }}
                  >
                    Edit
                  </Button>
                </Flex>
              </Flex>
              <InputGroup my="2rem">
                <InputLeftElement h="100%" w="8%">
                  <MastercardLogo boxSize="2.4rem" />
                </InputLeftElement>
                <Input
                  h="62px"
                  fontSize="14px"
                  fontWeight="bold"
                  borderRadius="8px"
                  style={{ padding: "0 4rem" }}
                  placeholder="2411    -    1244    -    8756    -    0917"
                  _placeholder={{ opacity: "0.5" }}
                />
                <InputRightElement height="100%" w="8%">
                  <VBadge boxSize="1rem" />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Flex align="center" justify="space-between" mb="2rem">
              <Box className="cvv">
                <SmallSubtitle mb="4px">CVV Number</SmallSubtitle>
                <SmallText color="#8e96a3">
                  Enter the 3 or 4 digit number on the card
                </SmallText>
              </Box>
              <InputGroup width="55%">
                <Input
                  h="62px"
                  type="number"
                  color="darkblue"
                  fontWeight="700"
                  placeholder="327"
                  textAlign="center"
                  borderRadius="8px"
                  _placeholder={{ color: "darkblue", fontWeight: "700" }}
                />
                <InputRightElement h="100%">
                  <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex justify="space-between" align="center" mb="2rem">
              <Box className="cvv">
                <SmallSubtitle mb="4px">Expiry Date</SmallSubtitle>
                <SmallText color="#8e96a3">
                  Enter the expiration date of the card
                </SmallText>
              </Box>
              <Flex width="55%" align="center">
                <Input
                  h="62px"
                  mr="1rem"
                  type="number"
                  placeholder="09"
                  textAlign="center"
                  borderRadius="8px"
                  focusBorderColor="#0077b6"
                  border="1px solid #e0e0e0"
                  _placeholder={{ color: "darkblue", fontWeight: "700" }}
                />
                /
                <Input
                  h="62px"
                  ml="1rem"
                  type="number"
                  placeholder="22"
                  textAlign="center"
                  borderRadius="8px"
                  focusBorderColor="#0077b6"
                  border="1px solid #e0e0e0"
                  _placeholder={{ color: "darkblue", fontWeight: "700" }}
                />
              </Flex>
            </Flex>
            <Flex align="center" justify="space-between" mb="2rem">
              <Box className="cvv">
                <SmallSubtitle mb="4px">Password</SmallSubtitle>
                <SmallText color="#8e96a3">
                  Enter your dynamic password
                </SmallText>
              </Box>
              <InputGroup width="55%">
                <InputRightElement h="100%">
                  <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Button
              h="62px"
              bg="#035fff"
              width="100%"
              fontSize="1rem"
              fontWeight="bold"
              colorScheme="blue"
              borderRadius="8px"
            >
              Pay Now
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="card-image-detail"></Box>
        </Box>
      </Flex>
    </Container>
  );
};

// darkBg: #17254c
// blueBg: #035fff

{
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
}
