import type { StyleProp } from "@uiid/core/properties";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
 * */
export const direction = {
  property: "flexDirection",
  values: ["column", "row"],
} satisfies StyleProp<"flexDirection">;
