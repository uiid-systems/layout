import { useId, Children } from "react";
import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box";

export const layerStyles = cva({
  base: ["grid", "[&>*]:col-[1_/_1]", "[&>*]:row-[1_/_1]"],
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
    paddingInlineEnd:
      offset && offset.x ? offset.x * (childCount - 1) : undefined,
    paddingBlockEnd:
      offset && offset.y ? offset.y * (childCount - 1) : undefined,
  } as React.CSSProperties;

  return (
    <>
      {offset && (
        <style>
          {Array.from(
            { length: childCount },
            (_, i) => `
          [data-layer-id="${id}"] > *:nth-child(${i + 1}) {
            --multiplier: ${i};
          }
        `
          ).join("\n")}
        </style>
      )}

      <Box
        data-layer-id={offset ? id : undefined}
        className={cx(
          {
            "[&>*]:translate-x-[calc(var(--offsetX,0)*var(--multiplier,0)*1px)]":
              offset && offset.x,
            "[&>*]:translate-y-[calc(var(--offsetY,0)*var(--multiplier,0)*1px)]":
              offset && offset.y,
          },
          layerStyles({ className })
        )}
        style={{ ...offsetStyles, ...style }}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

Layer.displayName = "Layer";
