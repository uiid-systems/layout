export type RenderProp = React.ReactElement<
  React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>
>;

export type VariantProps = {
  center?: boolean;
  evenly?: boolean;
  fullheight?: boolean;
  fullscreen?: boolean;
  fullwidth?: boolean;
  hide?: boolean;
  inline?: boolean;
  wrap?: boolean;
};
