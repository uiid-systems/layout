import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box";

export const stackStyles = cva({
  base: ["flex", "flex-col"],
  variants: {
    inline: { true: "inline-flex" },
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
  inline,
  /** other */
  className,
  children,
  ...props
}: StackProps) => (
  <Box
    data-uiid="stack"
    ax={ay}
    ay={ax}
    className={cx(stackStyles({ inline, className }))}
    {...props}
  >
    {children}
  </Box>
);

Stack.displayName = "Stack";
