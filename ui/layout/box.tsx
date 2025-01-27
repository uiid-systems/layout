import { isValidElement, cloneElement } from "react";

import { cva, cx, VariantProps } from "@/ui/cva";

import { responsiveStyles, type ResponsiveProps } from "./responsive-props";

export const boxStyles = cva({
  base: "",
  variants: {},
  defaultVariants: {},
});

type Render = React.ReactElement<
  React.PropsWithChildren<{ className?: string }>
>;

export type BoxProps = {
  render?: (() => Render) | Render;
} & ResponsiveProps &
  VariantProps<typeof boxStyles> &
  React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren;

export const Box = ({
  /** responsive-props */
  ax,
  ay,
  direction,
  gap,
  m,
  mx,
  my,
  p,
  px,
  py,
  visibility,
  w,
  /** composition */
  render,
  /** other */
  className,
  children,
  ...props
}: BoxProps) => {
  const boxClassName = cx(
    boxStyles({ className }),
    responsiveStyles({
      ax,
      ay,
      direction,
      gap,
      m,
      mx,
      my,
      p,
      px,
      py,
      visibility,
      w,
    })
  );

  if (typeof render === "function") {
    const rendered = render();
    return cloneElement(rendered, {
      ...props,
      children: children || rendered.props.children,
      className: cx(boxClassName, rendered.props.className),
    });
  }

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...props,
      children: children || render.props.children,
      className: cx(boxClassName, render.props.className),
    });
  }

  return (
    <div data-uiid="box" className={boxClassName} {...props}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
