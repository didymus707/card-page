import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { BodyText } from "../primitives/typography";
import { IconType } from "react-icons/lib";

const OrderText = (
  props: {
    title: string;
    value: string;
    icon?: IconType;
  }
) => {
  const { title, value, icon} = props;
  return (
    <>
      <Flex align="center" justify="space-between" mb="0.5rem">
        <BodyText fontWeight="bold" color="#8e96a3">
          {title}
        </BodyText>
        {icon && (
          <Icon
            p="4px"
            mr="8px"
            ml="auto"
            as={icon}
            bg="#17254c"
            color="white"
            boxSize={5}
            rounded="full"
          />
        )}
        <BodyText color="#17254c" fontWeight="bold">
          {value}
        </BodyText>
      </Flex>
    </>
  );
};

export default OrderText;