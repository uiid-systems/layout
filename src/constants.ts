import type { TogglePropsArray } from "@uiid/style-props";

export const TOGGLE_PROPS = [
  "evenly",
  "fullwidth",
  "fullheight",
  "fullscreen",
  "hidden",
  "interactive",
  "screenwidth",
  "screenheight",
] as const satisfies TogglePropsArray;
