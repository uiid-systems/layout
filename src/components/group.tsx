import { cva, cx, type VariantProps } from "@uiid/core";

import { Box, type BoxProps } from "./box";

const groupStyles = cva({
  base: ["flex"],
  variants: {
    evenly: { true: "*:flex-1" },
    inline: { true: "inline-flex" },
    wrap: { true: "flex-wrap" },
  },
  defaultVariants: {},
});

export type GroupProps = BoxProps & VariantProps<typeof groupStyles>;

export const Group = ({
  /** variants */
  evenly,
  inline,
  wrap,
  /** other */
  className,
  children,
  ...props
}: GroupProps) => {
  return (
    <Box
      data-uiid="group"
      className={cx(groupStyles({ evenly, inline, wrap, className }))}
      {...props}
    >
      {children}
    </Box>
  );
};

Group.displayName = "Group";
