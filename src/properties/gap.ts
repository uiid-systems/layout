import type { StyleProp } from "../types";

export const gap = {
  property: "gap",
  values: [0, 1, 2, 3, 4, 5] as const,
} satisfies StyleProp;
