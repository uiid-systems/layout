import type { ToggleProps, FlexProps, SpacingProps } from "@uiid/style-props";

import { TOGGLE_PROPS } from "./constants";

export type LayoutNativeProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof ToggleProps
>;

export type LayoutStyleProps = FlexProps & SpacingProps;

export type LayoutToggleProps = Pick<
  ToggleProps,
  (typeof TOGGLE_PROPS)[number]
>;
