import { cva, cx, type VariantProps } from "@uiid/core";

import { Box, type BoxProps } from "./box";

export const stackStyles = cva({
  base: ["flex", "flex-col"],
  variants: {
    evenly: { true: "*:flex-1" },
    inline: { true: "inline-flex" },
    wrap: { true: "flex-wrap" },
  },
  defaultVariants: {},
});

export type StackProps = {
  /** swap x and y */
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
} & BoxProps &
  VariantProps<typeof stackStyles>;

export const Stack = ({
  /** responsive-props */
  ax,
  ay,
  /** variants */
  evenly,
  inline,
  wrap,
  /** other */
  className,
  children,
  ...props
}: StackProps) => (
  <Box
    data-uiid="stack"
    ax={ay}
    ay={ax}
    className={cx(stackStyles({ evenly, inline, wrap, className }))}
    {...props}
  >
    {children}
  </Box>
);

Stack.displayName = "Stack";
