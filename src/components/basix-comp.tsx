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
    w="1.8rem"
    bg="#17254c"
    display="flex"
    height="2.6rem"
    borderRadius="4px"
    alignItems="center"
    justifyContent="center"
    {...rest}
  >
    {num}
  </Title>
);

export default TimerNumber;

export const CardLabel = ({ title, desc }: CardLabelProps) => (
  <>
    <Box>
      <Subtitle mb="4px">{title}</Subtitle>
      <SmallText color="#8e96a3" fontWeight="semibold">
        {desc}
      </SmallText>
    </Box>
  </>
);
