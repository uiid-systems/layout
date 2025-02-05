export type RenderProp = React.ReactElement<
  React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>
>;

export type StyleProp = {
  property: keyof React.CSSProperties;
  values: string[] | number[];
};

export type VariantProps = {
  centered?: boolean;
  evenly?: boolean;
  fullwidth?: boolean;
  hide?: boolean;
  inline?: boolean;
  wrap?: boolean;
};
