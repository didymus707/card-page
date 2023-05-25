import { forwardRef } from "react";
import {
  HeadingProps,
  Heading as ChakraHeading,
  BoxProps,
  Text as ChakraText,
} from "@chakra-ui/react";

export const Heading = forwardRef((props: HeadingProps, ref: any) => (
  <ChakraHeading ref={ref} fontSize="1.5rem" fontWeight="bold" {...props} />
));

Heading.displayName = "Heading3";

export const Subtitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1.3125rem" fontWeight="bold" {...props} />
));

Subtitle.displayName = "Subtitle";

export const SmallSubtitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="1rem" fontWeight="bold" {...props} />
));

SmallSubtitle.displayName = "SmallSubtitle";

export const BodyText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.875rem" fontWeight="normal" {...props} />
));

BodyText.displayName = "BodyText";

export const SmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.75rem" fontWeight="normal" {...props} />
));

SmallText.displayName = "SmallText";

export const XSmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.6875rem" fontWeight="normal" {...props} />
));

XSmallText.displayName = "XSmallText";

export const XXSmallText = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText ref={ref} fontSize="0.5625rem" fontWeight="normal" {...props} />
));

XXSmallText.displayName = "XXSmallText";

export const PreTitle = forwardRef((props: BoxProps, ref: any) => (
  <ChakraText
    ref={ref}
    fontWeight="bold"
    fontSize="0.625rem"
    textTransform="uppercase"
    {...props}
  />
));

PreTitle.displayName = "PreTitle";
