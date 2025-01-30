import { useId, Children } from "react";

import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box";

export const layerStyles = cva({
  base: ["grid", "*:col-[1/1]", "*:row-[1/1]"],
  variants: {},
  defaultVariants: {},
});

export type LayerProps = {
  offset?: {
    x?: number;
    y?: number;
  };
} & Omit<BoxProps, "gap"> &
  VariantProps<typeof layerStyles>;

export const Layer = ({
  offset,
  className,
  style,
  children,
  ...props
}: LayerProps) => {
  const id = useId();
  const childCount = Children.count(children);

  const offsetStyles = {
    "--offsetX": offset?.x,
    "--offsetY": offset?.y,
    paddingInlineEnd: offset?.x ? offset.x * (childCount - 1) : undefined,
    paddingBlockEnd: offset?.y ? offset.y * (childCount - 1) : undefined,
  } as React.CSSProperties;

  const multiplierStyles = (count: number) => (
    <style>
      {Array.from(
        { length: count },
        (_, i) => `
      [data-layer-id="${id}"] > *:nth-child(${i + 1}) {
        --mult: ${i};
      }
    `
      ).join("")}
    </style>
  );

  return (
    <Box
      data-uiid="layer"
      data-layer-id={offset ? id : undefined}
      className={cx(layerStyles({ className }), {
        "*:translate-x-[calc(var(--offsetX)*var(--mult)*1px)]": offset?.x,
        "*:translate-y-[calc(var(--offsetY)*var(--mult)*1px)]": offset?.y,
      })}
      style={{ ...offsetStyles, ...style }}
      {...props}
    >
      {offset && multiplierStyles(childCount)}
      {children}
    </Box>
  );
};

Layer.displayName = "Layer";
