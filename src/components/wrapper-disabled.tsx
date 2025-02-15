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
      condition={disabled}
      wrapper={<div style={wrapperStyles} />}
    >
      {children}
    </WrapperConditional>
  );
};
WrapperDisabled.displayName = "WrapperDisabled";

const wrapperStyles = {
  cursor: "not-allowed",
} satisfies React.CSSProperties;
