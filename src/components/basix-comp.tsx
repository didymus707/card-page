import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { SmallText, Subtitle, Title } from "../primitives/typography";

type TimerNumberProps = {
  num: number;
} & BoxProps;

type CardLabelProps = {
  title: string;
  desc: string;
};

export const TimerNumber = ({ num, ...rest }: TimerNumberProps) => (
  <Title
    bg="#17254c"
    display="flex"
    borderRadius="4px"
    alignItems="center"
    justifyContent="center"
    w={{ base: "1.6rem", md: "1.6rem", lg: "1.6rem", xl: "1.8rem" }}
    height={{ base: "2.4rem", md: "2.4rem", lg: "2.4rem", xl: "2.6rem" }}
    fontSize={{
      base: "1.2rem",
      md: "1.3125rem",
      lg: "1.3125rem",
      xl: "1.3125rem",
    }}
    {...rest}
  >
    {num}
  </Title>
);

export const CardLabel = ({ title, desc }: CardLabelProps) => (
  <>
    <Box>
      <Subtitle mb="4px" fontSize={{ base: "0.875rem", md: "1rem" }}>
        {title}
      </Subtitle>
      <SmallText color="#8e96a3" fontWeight="semibold">
        {desc}
      </SmallText>
    </Box>
  </>
);
