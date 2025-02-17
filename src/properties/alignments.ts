import type { StyleProp } from "@uiid/core/properties";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 * */
export const ax = {
  property: "justifyContent",
  values: [
    "space-around",
    "baseline",
    "space-between",
    "center",
    "end",
    "evenly",
    "normal",
    "start",
    "stretch",
  ] as const,
} satisfies StyleProp<"justifyContent">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 * */
export const ay = {
  property: "alignItems",
  values: ["baseline", "center", "end", "start", "stretch"] as const,
} satisfies StyleProp<"alignItems">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * */
export const ta = {
  property: "textAlign",
  values: ["left", "right", "center", "justify", "initial", "inherit"] as const,
} satisfies StyleProp<"textAlign">;
