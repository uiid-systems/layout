import { cloneElement } from "react";

import { Box, type BoxProps } from "./box";
import { Conditional } from "./conditional";

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
  display = "inline-flex",
  ...props
}: SlotsProps) => {
  const hasSlot = Boolean(before || after);

  /** @todo pass props? */
  const beforeElement =
    before && cloneElement(before, undefined, before.props.children);

  /** @todo pass props? */
  const afterElement =
    after && cloneElement(after, undefined, after.props.children);

  return (
    <Conditional
      condition={hasSlot}
      wrapper={<Box data-uiid-layout="slots" display={display} {...props} />}
    >
      {beforeElement}
      {children}
      {afterElement}
    </Conditional>
  );
};

Slots.displayName = "Slots";
