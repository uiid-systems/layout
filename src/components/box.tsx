import {
  cx,
  booleanProps,
  styleProps,
  type StyleProps,
  type RenderProp,
} from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";
import type { LayoutBooleanProps } from "../types";

export type BoxProps = {
  render?: RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  StyleProps<typeof properties> &
  LayoutBooleanProps;

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

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...props,
      "data-uiid-layout": "box",
      children: children ?? render.props.children,
      className: cx(variants, className, render.props.className),
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
