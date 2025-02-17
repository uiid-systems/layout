import { cx } from "@uiid/core/styles";
import { Box, type BoxProps } from "./box";

export type StackProps = {
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
  evenly?: boolean;
} & Omit<BoxProps, "ax" | "ay">;

export const Stack = ({ ax, ay, evenly, className, ...props }: StackProps) => (
  <Box
    data-uiid-layout="stack"
    ax={ay}
    ay={ax}
    className={cx(className, { evenly })}
    {...props}
  />
);

Stack.displayName = "Stack";
