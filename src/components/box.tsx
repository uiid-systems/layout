import {
  cx,
  booleanProps,
  styleProps,
  type StyleProps,
  type RenderProp,
} from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";
import type { VariantProps } from "../types";

export type BoxProps = {
  render?: (() => RenderProp) | RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  StyleProps<typeof properties> &
  VariantProps;

export const Box = ({
  center,
  disabled,
  evenly,
  fullheight,
  fullscreen,
  fullwidth,
  hidden,
  inactive,
  inline,
  wrap,
  render,
  className,
  style,
  children,
  ...props
}: BoxProps) => {
  const element = typeof render === "function" ? render() : render;
  const styles = { ...styleProps(props, properties), ...style };
  const variants = booleanProps({
    center,
    disabled,
    evenly,
    fullheight,
    fullscreen,
    fullwidth,
    hidden,
    inactive,
    inline,
    wrap,
  });

  if (isValidElement(element)) {
    return cloneElement(element, {
      ...props,
      "data-uiid-layout": "box",
      children: children ?? element.props.children,
      className: cx(variants, className, element.props.className),
      style: styles,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <div
      data-uiid-layout="box"
      className={cx(variants, className)}
      style={styles}
      {...props}
    >
      {children}
    </div>
  );
};

Box.displayName = "Box";
