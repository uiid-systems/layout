import type { StyleProp } from "@uiid/core";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
 * */
export const direction = {
  property: "flexDirection",
  values: ["column", "row"] as const,
} satisfies StyleProp;
