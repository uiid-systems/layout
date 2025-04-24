import { Conditional, type ConditionalProps } from "./conditional";

export type DisabledProps = React.PropsWithChildren<{
  disabled: ConditionalProps["condition"];
}>;

export const Disabled = ({ children, disabled }: DisabledProps) => {
  return (
    <Conditional
      aria-disabled={disabled}
      data-disabled={disabled}
      condition={disabled}
      wrapper={<div uiid="disabled" style={{ cursor: "not-allowed" }} />}
    >
      {children}
    </Conditional>
  );
};
Disabled.displayName = "Disabled";
