import { cx } from "@uiid/core";
import { cloneElement } from "react";

import { Box, type BoxProps } from "./box";

type Slot = React.ReactElement<any>;

export type WrapperSlotsProps = {
  before?: Slot;
  after?: Slot;
} & BoxProps;

export const WrapperSlots = ({
  before,
  after,
  direction,
  className,
  children,
  style,
  ...props
}: WrapperSlotsProps) => {
  /** @todo pass props? */
  const beforeElement =
    before && cloneElement(before, undefined, before.props.children);

  /** @todo pass props? */
  const afterElement =
    after && cloneElement(after, undefined, after.props.children);

  return (
    <Box
      direction={direction}
      className={cx("inline-flex", className)}
      {...props}
    >
      {beforeElement}
      {children}
      {afterElement}
    </Box>
  );
};
