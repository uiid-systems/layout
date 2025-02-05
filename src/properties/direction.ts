import type { StyleProp } from "@uiid/core";

export const direction = {
  property: "flexDirection",
  values: ["column", "row"] as const,
} satisfies StyleProp;
