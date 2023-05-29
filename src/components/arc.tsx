import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Arc = (props: BoxProps) => {
  return (
    <Box
      h="2.2rem"
      w="2.2rem"
      top="-19px"
      bg="white"
      rounded="full"
      position="absolute"
      {...props}
    />
  );
};

export default Arc;
