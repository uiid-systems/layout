import { isValidElement, cloneElement } from "react";

import { cx } from "@uiid/core";

import { responsiveStyles, type ResponsiveProps } from "../responsive-props";
import type { VariantProps } from "../types";

type Render = React.ReactElement<
  React.PropsWithChildren<{ className?: string }>
>;

export type BoxProps = React.PropsWithChildren<{
  render?: (() => Render) | Render;
  ref?: React.Ref<any>;
}> &
  React.HTMLAttributes<HTMLElement> &
  ResponsiveProps &
  VariantProps;

export const Box = ({
  /** variants */
  fullwidth,
  evenly,
  inline,
  wrap,
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
    className,
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
    <div
      data-uiid="box"
      data-fullwidth={fullwidth}
      data-evenly={evenly}
      data-inline={inline}
      data-wrap={wrap}
      ref={ref}
      className={boxClassName}
      {...props}
    >
      {children}
    </div>
  );
};

Box.displayName = "Box";
