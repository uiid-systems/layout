import { cloneElement } from "react";

import { Box, type BoxProps } from "./box";
import { Conditional } from "./conditional";

type Slot = React.ReactElement<any> | string | number;

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

  const renderSlot = (slot: Slot | undefined) => {
    if (!slot) return null;
    if (typeof slot === "string" || typeof slot === "number") {
      return slot;
    }
    return cloneElement(slot, undefined, slot.props.children);
  };

  const beforeElement = renderSlot(before);
  const afterElement = renderSlot(after);

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
