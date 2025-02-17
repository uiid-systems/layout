import type { StyleProp } from "@uiid/core/properties";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
 * */
export const visibility = {
  property: "visibility",
  values: ["visible", "hidden"] as const,
} satisfies StyleProp<"visibility">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
 * */
export const opacity = {
  property: "opacity",
  values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const,
} satisfies StyleProp<"opacity">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
 * */
export const display = {
  property: "display",
  values: [
    "none",
    "block",
    "inline",
    "inline-block",
    "flex",
    "inline-flex",
    "contents",
  ] as const,
} satisfies StyleProp<"display">;
