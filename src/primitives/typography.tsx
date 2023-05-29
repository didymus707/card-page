import { forwardRef } from "react";
import {
  BoxProps,
  Text as ChakraText,
} from "@chakra-ui/react";

export const Title = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1.3125rem" fontWeight="bold" {...props} />
));

Title.displayName = "Title";

export const Subtitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1rem" fontWeight="bold" {...props} />
));

Subtitle.displayName = "Subtitle";

export const BodyText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.875rem" fontWeight="normal" {...props} />
));

BodyText.displayName = "BodyText";

export const SmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.75rem" fontWeight="normal" {...props} />
));

SmallText.displayName = "SmallText";
