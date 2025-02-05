import type { StyleProp } from "@uiid/core";

export const visibility = {
  property: "visibility",
  values: ["visible", "hidden"] as const,
} satisfies StyleProp;

export const opacity = {
  property: "opacity",
  values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const,
} satisfies StyleProp;

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
} satisfies StyleProp;
