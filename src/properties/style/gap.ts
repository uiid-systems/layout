import type { StyleProp } from "@uiid/core/properties";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
 * */
export const gap = {
  property: "gap",
  values: [0, 1, 2, 3, 4, 5, 6, 7, 8] as const,
  scale: {
    variable: "--spacing",
  },
} satisfies StyleProp<"gap">;
