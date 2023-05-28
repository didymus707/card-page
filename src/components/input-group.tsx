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
  color?: string;
  spacey?: string;
  placeholdervalue: string;
  lefticon?: React.ReactNode;
  length?: BoxProps["width"];
  righticon?: React.ReactNode;
  groupwidth?: BoxProps["width"];
} & BoxProps &
  InputProps;

const InputGroupBox = (props: InputGroupBoxProps) => {
  const {
    type,
    color,
    spacey,
    length,
    lefticon,
    righticon,
    groupwidth,
    placeholdervalue,
  } = props;
  return (
    <>
      <InputGroup my={spacey} w={groupwidth}>
        {lefticon && (
          <InputLeftElement h="100%" w={length}>
            {lefticon}
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
          placeholder={placeholdervalue}
          {...props}
        />
        {righticon && (
          <InputRightElement height="100%" w={length}>
            {righticon}
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
};

export default InputGroupBox;
