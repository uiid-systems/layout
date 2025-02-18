import type { StyleProps } from "@uiid/core/properties";
import { STYLE_PROPS, TOGGLE_PROPS } from "./constants";

export type LayoutBooleanProps = {
  [K in keyof typeof TOGGLE_PROPS]?: boolean;
};

export type LayoutStyleProps = StyleProps<typeof STYLE_PROPS>;
