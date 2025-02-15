import { cloneElement } from "react";

export type ConditionalProps = {
  condition: boolean;
  wrapper: React.ReactElement<any>;
  children?: React.ReactNode;
};

export function Conditional({
  condition,
  wrapper,
  children,
}: ConditionalProps) {
  if (!condition || !wrapper) return <>{children}</>;

  const contentToRender = children ?? wrapper.props.children;

  return cloneElement(wrapper, undefined, contentToRender);
}
Conditional.displayName = "Conditional";
