import { useId } from "react";
import { Box, type BoxProps } from "./box";

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

  if (breakpoint && document) {
    const style = document.createElement("style");
    style.textContent = `@media (width <= ${breakpoint}px) {[uiid="${uiid}"][data-switch="${breakpointId}"] { flex-direction: row; }}`;
    document.head.appendChild(style);
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
