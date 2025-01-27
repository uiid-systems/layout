import { cloneElement } from "react";

export interface WrapperConditionalProps {
  condition: boolean;
  wrapper: React.ReactElement<any>;
  children?: React.ReactNode;
}

export function WrapperConditional({
  condition,
  wrapper,
  children,
}: WrapperConditionalProps) {
  if (!condition || !wrapper) return <>{children}</>;

  const contentToRender = children ?? wrapper.props.children;

  return cloneElement(wrapper, undefined, contentToRender);
}
