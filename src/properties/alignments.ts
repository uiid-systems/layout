import type { StyleProp } from "@uiid/core";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 * */
export const ax = {
  property: "justifyContent",
  values: [
    "around",
    "baseline",
    "between",
    "center",
    "end",
    "evenly",
    "normal",
    "start",
    "stretch",
  ] as const,
} satisfies StyleProp;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 * */
export const ay = {
  property: "alignItems",
  values: ["baseline", "center", "end", "start", "stretch"] as const,
} satisfies StyleProp;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * */
export const ta = {
  property: "textAlign",
  values: ["left", "right", "center", "justify", "initial", "inherit"] as const,
} satisfies StyleProp;
