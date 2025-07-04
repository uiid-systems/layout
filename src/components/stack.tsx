import { useId } from "react";
import { Box, type BoxProps } from "./box";
import { injectBreakpointStyle } from "../utils";

const uiid = "stack";

export type StackProps = {
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
  switch?: number;
} & Omit<BoxProps, "ax" | "ay">;

export const Stack = ({
  ax,
  ay,
  switch: breakpoint,
  className,
  ...props
}: StackProps) => {
  const randomId = useId();
  const breakpointId = `${breakpoint}-${randomId}`;

  if (breakpoint) {
    injectBreakpointStyle(
      uiid,
      breakpointId,
      breakpoint,
      "flex-direction: row"
    );
  }

  return (
    <Box
      uiid={uiid}
      data-switch={breakpoint ? breakpointId : undefined}
      ax={ay}
      ay={ax}
      className={className}
      {...props}
    />
  );
};
Stack.displayName = "Stack";
