import { isValidElement, cloneElement } from "react";

import { cva, cx, VariantProps } from "@uiid/core";

import { responsiveStyles, type ResponsiveProps } from "../responsive-props";

export const boxStyles = cva({
  base: "",
  variants: {
    fullwidth: { true: "w-full" },
  },
  defaultVariants: {},
});

type Render = React.ReactElement<
  React.PropsWithChildren<{ className?: string }>
>;

export type BoxProps = React.PropsWithChildren<{
  render?: (() => Render) | Render;
  ref?: React.Ref<any>;
}> &
  React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof boxStyles> &
  ResponsiveProps;

export const Box = ({
  /** variants */
  fullwidth,
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
  ref,
  ...props
}: BoxProps) => {
  const boxClassName = cx(
    boxStyles({ fullwidth, className }),
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
    <div data-uiid="box" ref={ref} className={boxClassName} {...props}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
