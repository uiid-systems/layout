const BOOLEAN_PROPS = [
  "center",
  "disabled",
  "evenly",
  "fullheight",
  "fullscreen",
  "fullwidth",
  "hidden",
  "inactive",
  "inline",
  "wrap",
] as const;

export type LayoutBooleanProps = {
  [K in (typeof BOOLEAN_PROPS)[number]]?: boolean;
};
