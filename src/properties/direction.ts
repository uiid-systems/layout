import type { StyleProp } from "../types";

export const direction = {
  property: "flexDirection",
  values: ["column", "row"] as const,
} satisfies StyleProp;
