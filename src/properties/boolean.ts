export const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} satisfies React.CSSProperties;

export const disabled = {
  pointerEvents: "none",
  filter: "greyscale(50%)",
  opacity: "var(--inactive-opacity)",
} satisfies React.CSSProperties;

export const fullheight = {
  height: "100%",
  overflowY: "hidden",
} satisfies React.CSSProperties;

export const fullscreen = {
  margin: 0,
  padding: 0,
  width: "100dvh",
  height: "100dvh",
  overflow: "hidden",
} satisfies React.CSSProperties;

export const fullwidth = {
  width: "100%",
  overflowX: "hidden",
} satisfies React.CSSProperties;

export const hidden = {
  display: "none",
} satisfies React.CSSProperties;

export const inactive = {
  opacity: "var(--inactive-opacity)",
} satisfies React.CSSProperties;

export const interactive = {
  cursor: "pointer",
  transition: "scale var(--scale-duration) ease",
  userSelect: "none",
} satisfies React.CSSProperties;

export const wrap = {
  flexWrap: "wrap",
} satisfies React.CSSProperties;
