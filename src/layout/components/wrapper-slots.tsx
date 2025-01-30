import { cloneElement } from "react";

import { cx } from "@/ui/cva";

import { Box, type BoxProps } from "./box";

type Slot = React.ReactElement<any>;

export type WrapperSlotsProps = {
  before?: Slot;
  after?: Slot;
} & BoxProps;

export const WrapperSlots = ({
  before,
  after,
  className,
  children,
  ...props
}: WrapperSlotsProps) => {
  /** @todo pass props? */
  const beforeElement =
    before && cloneElement(before, undefined, before.props.children);

  /** @todo pass props? */
  const afterElement =
    after && cloneElement(after, undefined, after.props.children);

  return (
    <Box className={cx("inline-flex", className)} {...props}>
      {beforeElement}
      {children}
      {afterElement}
    </Box>
  );
};
