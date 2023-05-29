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
  spacey?: string;
  textsec?: string
  webkitsec?: string;
  val: InputProps['value'];
  placeholdervalue: string;
  length?: BoxProps["width"];
  lefticon?: React.ReactNode;
  righticon?: React.ReactNode;
  groupwidth?: BoxProps["width"];
  noOfCharacters?: InputProps['maxLength'];
} & BoxProps;

const InputGroupBox = (props: InputGroupBoxProps) => {
  const {
    val,
    type,
    spacey,
    length,
    lefticon,
    righticon,
    groupwidth,
    textsec,
    webkitsec,
    noOfCharacters,
    placeholdervalue,
    ...rest
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
          value={val}
          fontSize="14px"
          color='darkblue'
          fontWeight="bold"
          borderRadius="8px"
          maxLength={noOfCharacters}
          focusBorderColor="#0077b6"
          border="1px solid #e0e0e0"
          placeholder={placeholdervalue}
          _placeholder={{
            opacity: 0.5,
            fontWeight: "700",
          }}

          {...rest}
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
