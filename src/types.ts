import type { StyleProps } from "@uiid/core/properties";
import * as TOGGLE_PROPS from "@uiid/style-props/toggles";
import * as STYLE_PROPS from "@uiid/style-props/styles";

export type LayoutBooleanProps = {
  [K in keyof typeof TOGGLE_PROPS]?: boolean;
};

export type LayoutStyleProps = StyleProps<typeof STYLE_PROPS>;
