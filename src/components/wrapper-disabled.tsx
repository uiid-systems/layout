import {
  WrapperConditional,
  type WrapperConditionalProps,
} from "./wrapper-conditional";

export type WrapperDisabledProps = React.PropsWithChildren<{
  disabled: WrapperConditionalProps["condition"];
}>;

export const WrapperDisabled = ({
  children,
  disabled,
}: WrapperDisabledProps) => {
  return (
    <WrapperConditional
      aria-disabled={disabled}
      data-disabled={disabled}
      condition={disabled}
      wrapper={<div style={{ cursor: "not-allowed" }} />}
    >
      {children}
    </WrapperConditional>
  );
};
WrapperDisabled.displayName = "WrapperDisabled";
