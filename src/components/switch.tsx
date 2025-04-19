import { cloneElement } from "react";

export interface SwitchProps {
  condition: boolean;
  wrappers: {
    true: React.ReactElement<any>;
    false: React.ReactElement<any>;
  };
  children?: React.ReactNode;
}

export function Switch({ condition, wrappers, children }: SwitchProps) {
  const selectedWrapper = condition ? wrappers.true : wrappers.false;
  if (!selectedWrapper) return <>{children}</>;
  const contentToRender = children ?? selectedWrapper.props.children;
  return cloneElement(selectedWrapper, undefined, contentToRender);
}
Switch.displayName = "Switch";
