import type { StyleProp } from "@uiid/core";

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin */
export const m = {
  property: "margin",
  values: [0, 1, 2, 3, 4, 5, "auto"] as const,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline */
export const mx = {
  property: "marginInline",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start */
export const ml = {
  property: "marginInlineStart",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end */
export const mr = {
  property: "marginInlineEnd",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block */
export const my = {
  property: "marginBlock",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start */
export const mt = {
  property: "marginBlockStart",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end */
export const mb = {
  property: "marginBlockEnd",
  values: m.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
export const p = {
  property: "padding",
  values: [0, 1, 2, 3, 4, 5, 6] as const,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline */
export const px = {
  property: "paddingInline",
  values: p.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start */
export const pl = {
  property: "paddingInlineStart",
  values: p.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end */
export const pr = {
  property: "paddingInlineEnd",
  values: p.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block */
export const py = {
  property: "paddingBlock",
  values: p.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start */
export const pt = {
  property: "paddingBlockStart",
  values: p.values,
} satisfies StyleProp;

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end */
export const pb = {
  property: "paddingBlockEnd",
  values: p.values,
} satisfies StyleProp;
