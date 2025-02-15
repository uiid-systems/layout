import type { StyleProp } from "@uiid/core";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
 * */
export const gap = {
  property: "gap",
  values: [0, 1, 2, 3, 4, 5] as const,
} satisfies StyleProp;
