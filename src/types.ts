import type { StyleProps } from "@uiid/core/properties";

import { BOOLEAN_PROPS } from "./constants";
import * as properties from "./properties";

export type LayoutBooleanProps = {
  [K in (typeof BOOLEAN_PROPS)[number]]?: boolean;
};

export type LayoutStyleProps = StyleProps<typeof properties>;
