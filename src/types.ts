import type { FlexProps, SpacingProps } from "@uiid/style-props/styles";
import type { ToggleProps } from "@uiid/style-props/toggles";

import { TOGGLE_PROPS } from "./constants";

export type LayoutStyleProps = FlexProps & SpacingProps;

export type LayoutToggleProps = Pick<
  ToggleProps,
  (typeof TOGGLE_PROPS)[number]
>;
