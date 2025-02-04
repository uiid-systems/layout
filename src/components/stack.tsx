import { Box, type BoxProps } from "./box";

export type StackProps = {
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
} & BoxProps;

export const Stack = ({ ax, ay, children, ...props }: StackProps) => (
  <Box data-uiid="stack" ax={ay} ay={ax} {...props} />
);

Stack.displayName = "Stack";
