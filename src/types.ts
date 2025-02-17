import type { StyleProps } from "@uiid/core/properties";

import * as BOOLEAN_PROPS from "./properties/boolean";
import * as STYLE_PROPS from "./properties/style";

export type LayoutBooleanProps = {
  [K in keyof typeof BOOLEAN_PROPS]?: boolean;
};

export type LayoutStyleProps = StyleProps<typeof STYLE_PROPS>;
