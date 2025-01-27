import { cloneElement } from "react";

export interface WrapperConditionalProps {
  condition: boolean;
  wrapper?: React.ReactElement<any>;
  children: React.ReactNode;
}

export function WrapperConditional({
  condition,
  wrapper,
  children,
}: WrapperConditionalProps) {
  return condition && wrapper ? (
    cloneElement(wrapper, undefined, children)
  ) : (
    <>{children}</>
  );
}
