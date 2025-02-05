import type { StyleProp } from "../types";

export const visibility = {
  property: "visibility",
  values: ["visible", "hidden"] as const,
} satisfies StyleProp;
