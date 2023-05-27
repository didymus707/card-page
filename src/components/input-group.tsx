import React from "react";
import {
  Input,
  BoxProps,
  InputGroup,
  InputProps,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

type InputGroupBoxProps = {
  type?: string;
  length?: string;
  color?: string;
  spaceY?: string;
  groupWidth?: string;
  placeholderValue: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & BoxProps &
  InputProps;

const InputGroupBox = (props: InputGroupBoxProps) => {
  const { type, color, spaceY, length, leftIcon, placeholderValue, rightIcon, groupWidth } =
    props;
  return (
    <>
      <InputGroup my={spaceY} w={groupWidth}>
        {leftIcon && (
          <InputLeftElement h="100%" w={length}>
            {leftIcon}
          </InputLeftElement>
        )}
        <Input
          h="3.5rem"
          type={type}
          color={color}
          fontSize="14px"
          fontWeight="bold"
          borderRadius="8px"
          focusBorderColor="#0077b6"
          border="1px solid #e0e0e0"
          placeholder={placeholderValue}
          {...props}
        />
        {rightIcon && (
          <InputRightElement height="100%" w={length}>
            {rightIcon}
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
};

export default InputGroupBox;
