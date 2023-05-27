import { Box, Button, Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";
import TimerNumber, { CardLabel } from "./basix-comp";
import { MdEdit } from "react-icons/md";
import InputGroupBox from "./input-group";
import { FaCreditCard } from "react-icons/fa";
import { CgLayoutGridSmall } from "react-icons/cg";
import { MastercardLogo, VBadge } from "../primitives/icons";
import { Title } from "../primitives/typography";

export const CardForm = () => {
  return (
    <>
      <Box width="62%">
        <Flex align="center">
          <Flex align="center">
            <Flex
              h="2.8rem"
              w="2.8rem"
              bg="#367fff"
              rounded="full"
              align="center"
              justify="center"
            >
              <Icon
                top="2px"
                color="white"
                boxSize="1rem"
                as={FaCreditCard}
                borderRadius="3px"
                position="relative"
                boxShadow="2.7px -2.7px 1px #cfcfef"
                style={{ transform: "rotate(-21deg)" }}
              />
            </Flex>
            <Title fontWeight="bold" ml="0.5rem">
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
        <Box className="card-area">
          <Box className="card-no">
            <Flex mt="2rem">
              <CardLabel
                title="Card Number"
                desc=" Enter the 16-digit card number on the card"
              />
              <Flex as="button" align="center" ml="auto">
                <Icon as={MdEdit} color="#367fff" fontWeight="800" />
                <Button
                  p="0"
                  fontSize="0.87rem"
                  variant="ghost"
                  color="#367fff"
                  _hover={{ bg: "none" }}
                >
                  Edit
                </Button>
              </Flex>
            </Flex>
            <InputGroupBox
              length="12%"
              type="number"
              spaceY="1.5rem"
              textAlign="left"
              style={{ padding: "0 4rem" }}
              rightIcon={<VBadge boxSize="1rem" />}
              leftIcon={<MastercardLogo boxSize="2.4rem" />}
              placeholderValue="2411    -    1244    -    8756    -    0917"
              _placeholder={{
                opacity: 0.5,
                color: "darkblue",
                fontWeight: "700",
              }}
            />
          </Box>
          <Flex align="center" justify="space-between" mb="1.5rem">
            <CardLabel
              title="CVV Number"
              desc="Enter the 3 or 4 digit number on the card"
            />
            <InputGroupBox
              length="24%"
              type="number"
              groupWidth="50%"
              color="darkblue"
              textAlign="center"
              style={{ padding: "0 4rem" }}
              rightIcon={
                <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
              }
              placeholderValue="327"
              _placeholder={{ color: "darkblue", fontWeight: "700" }}
            />
          </Flex>
          <Flex justify="space-between" align="center" mb="1.5rem">
            <CardLabel
              title="Expiry Date"
              desc="Enter the expiration date of the card"
            />
            <Flex width="50%" align="center">
              <Input
                min={1}
                max={12}
                h="3.5rem"
                type="number"
                color="darkblue"
                placeholder="09"
                fontWeight="bold"
                textAlign="center"
                borderRadius="8px"
                focusBorderColor="#0077b6"
                border="1px solid #e0e0e0"
                _placeholder={{ color: "darkblue", fontWeight: "700" }}
              />
              <Box as="span" mx="1rem" fontWeight="bold">
                /
              </Box>
              <Input
                min={1}
                max={31}
                h="3.5rem"
                type="number"
                color="darkblue"
                placeholder="22"
                fontWeight="bold"
                textAlign="center"
                borderRadius="8px"
                focusBorderColor="#0077b6"
                border="1px solid #e0e0e0"
                _placeholder={{ color: "darkblue", fontWeight: "700" }}
              />
            </Flex>
          </Flex>
          <Flex align="center" justify="space-between" mb="1.5rem">
            <CardLabel title="Password" desc="Enter your dynamic password" />
            <InputGroupBox
              length="24%"
              type="password"
              groupWidth="50%"
              color="darkblue"
              style={{ padding: "0 2rem" }}
              rightIcon={
                <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
              }
              placeholderValue="327"
              _placeholder={{ color: "darkblue", fontWeight: "700" }}
            />
          </Flex>
          <Button
            h="3.5rem"
            bg="#367fff"
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
    </>
  );
};
