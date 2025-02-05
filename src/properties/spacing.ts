import type { StyleProp } from "@uiid/core";

export const m = {
  property: "margin",
  values: [0, 1, 2, 3, 4, 5, "auto"] as const,
} satisfies StyleProp;

export const mx = {
  property: "marginInline",
  values: m.values,
} satisfies StyleProp;

export const ml = {
  property: "marginInlineStart",
  values: m.values,
} satisfies StyleProp;

export const mr = {
  property: "marginInlineEnd",
  values: m.values,
} satisfies StyleProp;

export const my = {
  property: "marginBlock",
  values: m.values,
} satisfies StyleProp;

export const mt = {
  property: "marginBlockStart",
  values: m.values,
} satisfies StyleProp;

export const mb = {
  property: "marginBlockEnd",
  values: m.values,
} satisfies StyleProp;

export const p = {
  property: "padding",
  values: [0, 1, 2, 3, 4, 5, 6] as const,
} satisfies StyleProp;

export const px = {
  property: "paddingInline",
  values: p.values,
} satisfies StyleProp;

export const pl = {
  property: "paddingInlineStart",
  values: p.values,
} satisfies StyleProp;

export const pr = {
  property: "paddingInlineEnd",
  values: p.values,
} satisfies StyleProp;

export const py = {
  property: "paddingBlock",
  values: p.values,
} satisfies StyleProp;

export const pt = {
  property: "paddingBlockStart",
  values: p.values,
} satisfies StyleProp;

export const pb = {
  property: "paddingBlockEnd",
  values: p.values,
} satisfies StyleProp;
