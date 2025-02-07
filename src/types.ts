export type RenderProp = React.ReactElement<
  React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>
>;

export type VariantProps = {
  center?: boolean;
  disabled?: boolean;
  evenly?: boolean;
  fullheight?: boolean;
  fullscreen?: boolean;
  fullwidth?: boolean;
  hide?: boolean;
  inactive?: boolean;
  inline?: boolean;
  wrap?: boolean;
};
