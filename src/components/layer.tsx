import { cx } from "@uiid/core";

import { useId, Children } from "react";

import { Box, type BoxProps } from "./box";

export type LayerProps = {
  offset?: {
    x?: number;
    y?: number;
  };
} & Omit<BoxProps, "gap">;

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
      /** @todo no more tailwind */
      className={cx(className, {
        "*:translate-x-[calc(var(--offsetX)*var(--mult)*1px)]": offset?.x,
        "*:translate-y-[calc(var(--offsetY)*var(--mult)*1px)]": offset?.y,
      })}
      style={{ ...offsetStyles, ...style }}
      {...props}
    >
      {children}
      {offset && multiplierStyles(childCount)}
    </Box>
  );
};

Layer.displayName = "Layer";
