import { cloneElement } from "react";

import { Box, type BoxProps } from "./box";

type Slot = React.ReactElement<any>;

export type SlotsProps = {
  before?: Slot;
  after?: Slot;
} & BoxProps;

export const Slots = ({
  before,
  after,
  className,
  children,
  style,
  ...props
}: SlotsProps) => {
  /** @todo pass props? */
  const beforeElement =
    before && cloneElement(before, undefined, before.props.children);

  /** @todo pass props? */
  const afterElement =
    after && cloneElement(after, undefined, after.props.children);

  return (
    <Box {...props}>
      {beforeElement}
      {children}
      {afterElement}
    </Box>
  );
};

Slots.displayName = "Slots";
