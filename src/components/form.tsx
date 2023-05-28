import React from "react";
import { MdEdit } from "react-icons/md";
import { CardLabel } from "./basix-comp";
import InputGroupBox from "./input-group";
import { CgLayoutGridSmall } from "react-icons/cg";
import { MastercardLogo, VBadge } from "../primitives/icons";
import { Box, Button, Flex, Icon, Input } from "@chakra-ui/react";

export const CardForm = () => {
  return (
    <>
      <Box className="card-area">
        <Box className="card-no">
          <Flex mt="2rem" align={{ base: "baseline", md: "flex-start" }}>
            <CardLabel
              title="Card Number"
              desc=" Enter the 16-digit card number on the card"
            />
            <Flex
              ml="auto"
              as="button"
              align="center"
              display={{ base: "none", md: "flex" }}
            >
              <Icon as={MdEdit} color="#367fff" fontWeight="800" />
              <Button
                p="0"
                fontSize={{ base: "0.8rem", md: "1rem" }}
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
            spacey="1.5rem"
            textAlign="left"
            style={{ padding: "0 4rem" }}
            righticon={<VBadge boxSize="1rem" />}
            lefticon={<MastercardLogo boxSize="2.4rem" />}
            placeholdervalue="2411    -    1244    -    8756    -    0917"
            _placeholder={{
              opacity: 0.5,
              color: "darkblue",
              fontWeight: "700",
            }}
          />
        </Box>
        <Flex
          gap="1rem"
          mb="1.5rem"
          align="center"
          justify="space-between"
          wrap={{ base: "wrap", md: "nowrap", lg: "wrap", xl: "nowrap" }}
        >
          <CardLabel
            title="CVV Number"
            desc="Enter the 3 or 4 digit number on the card"
          />
          <InputGroupBox
            type="number"
            color="darkblue"
            textAlign="center"
            placeholdervalue="327"
            style={{ padding: "0 4rem" }}
            length={{ base: "12%", md: "24%" }}
            groupwidth={{ base: "100%", md: "50%", lg: "100%", xl: "50%" }}
            _placeholder={{ color: "darkblue", fontWeight: "700" }}
            righticon={
              <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
            }
          />
        </Flex>
        <Flex
          gap="1rem"
          mb="1.5rem"
          align="center"
          justify="space-between"
          wrap={{ base: "wrap", md: "nowrap", lg: "wrap", xl: "nowrap" }}
        >
          <CardLabel
            title="Expiry Date"
            desc="Enter the expiration date of the card"
          />
          <Flex
            width={{ base: "100%", md: "50%", lg: "100%", xl: "50%" }}
            align="center"
          >
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
        <Flex
          gap="1rem"
          mb="1.5rem"
          align="center"
          justify="space-between"
          wrap={{ base: "wrap", md: "nowrap", lg: "wrap", xl: "nowrap" }}
        >
          <CardLabel title="Password" desc="Enter your dynamic password" />
          <InputGroupBox
            type="password"
            color="darkblue"
            placeholdervalue="327"
            style={{ padding: "0 2rem" }}
            length={{ base: "12%", md: "24%" }}
            groupwidth={{ base: "100%", md: "50%", lg: "100%", xl: "50%" }}
            _placeholder={{ color: "darkblue", fontWeight: "700" }}
            righticon={
              <Icon as={CgLayoutGridSmall} boxSize="2.4rem" color="gray" />
            }
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
    </>
  );
};
