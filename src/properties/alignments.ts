import type { StyleProp } from "@uiid/core";

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

export const ay = {
  property: "alignItems",
  values: ["baseline", "center", "end", "start", "stretch"] as const,
} satisfies StyleProp;
