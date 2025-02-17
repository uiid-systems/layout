import type { StyleProp } from "@uiid/core/properties";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
 * */
export const m = {
  property: "margin",
  values: [0, 1, 2, 3, 4, 5, 6, 7, 8, "auto"] as const,
  scale: {
    variable: "--spacing",
  },
} satisfies StyleProp<"margin">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline
 * */
export const mx = {
  property: "marginInline",
  values: m.values,
} satisfies StyleProp<"marginInline">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start
 * */
export const ml = {
  property: "marginInlineStart",
  values: m.values,
} satisfies StyleProp<"marginInlineStart">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end
 * */
export const mr = {
  property: "marginInlineEnd",
  values: m.values,
} satisfies StyleProp<"marginInlineEnd">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block
 * */
export const my = {
  property: "marginBlock",
  values: m.values,
} satisfies StyleProp<"marginBlock">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start
 * */
export const mt = {
  property: "marginBlockStart",
  values: m.values,
} satisfies StyleProp<"marginBlockStart">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end
 * */
export const mb = {
  property: "marginBlockEnd",
  values: m.values,
} satisfies StyleProp<"marginBlockEnd">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 * */
export const p = {
  property: "padding",
  values: [0, 1, 2, 3, 4, 5, 6, 7, 8] as const,
  scale: {
    variable: "--spacing",
  },
} satisfies StyleProp<"padding">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline
 * */
export const px = {
  ...p,
  property: "paddingInline",
} satisfies StyleProp<"paddingInline">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start
 * */
export const pl = {
  ...p,
  property: "paddingInlineStart",
} satisfies StyleProp<"paddingInlineStart">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end
 * */
export const pr = {
  ...p,
  property: "paddingInlineEnd",
} satisfies StyleProp<"paddingInlineEnd">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block
 * */
export const py = {
  ...p,
  property: "paddingBlock",
} satisfies StyleProp<"paddingBlock">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start
 * */
export const pt = {
  ...p,
  property: "paddingBlockStart",
} satisfies StyleProp<"paddingBlockStart">;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end
 * */
export const pb = {
  ...p,
  property: "paddingBlockEnd",
} satisfies StyleProp<"paddingBlockEnd">;
