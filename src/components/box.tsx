import { cx, booleanProps, styleProps, type StyleProps } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";
import type { RenderProp, VariantProps } from "../types";

export type BoxProps = {
  render?: (() => RenderProp) | RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  StyleProps<typeof properties> &
  VariantProps;

export const Box = ({
  center,
  evenly,
  fullheight,
  fullscreen,
  fullwidth,
  hide,
  inline,
  wrap,
  render,
  className,
  children,
  ...props
}: BoxProps) => {
  const element = typeof render === "function" ? render() : render;
  const styles = { ...props.style, ...styleProps(props, properties) };
  const variants = booleanProps({
    center,
    evenly,
    fullheight,
    fullscreen,
    fullwidth,
    hide,
    inline,
    wrap,
  });

  if (isValidElement(element)) {
    return cloneElement(element, {
      ...props,
      children: children ?? element.props.children,
      className: cx(variants, className, element.props.className),
      style: { ...props.style, ...styles },
    });
  }

  return (
    <div className={cx(variants, className)} style={styles} {...props}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
