import { cloneElement } from "react";

export interface WrapperSwitchProps {
  condition: boolean;
  wrappers: {
    true: React.ReactElement<any>;
    false: React.ReactElement<any>;
  };
  children?: React.ReactNode;
}

export function WrapperSwitch({
  condition,
  wrappers,
  children,
}: WrapperSwitchProps) {
  const selectedWrapper = condition ? wrappers.true : wrappers.false;

  return selectedWrapper ? (
    cloneElement(selectedWrapper, undefined, children)
  ) : (
    <>{children}</>
  );
}
