import { Box, type BoxProps } from "./box";

export type StackProps = {
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
} & BoxProps;

export const Stack = ({ ax, ay, ...props }: StackProps) => (
  <Box data-uiid-layout="stack" ax={ay} ay={ax} {...props} />
);

Stack.displayName = "Stack";
