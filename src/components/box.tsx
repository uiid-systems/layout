import { cx, styleProps, type StyleProps } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";
import type { RenderProp, VariantProps } from "../types";

export type BoxProps = {
  render?: (() => RenderProp) | RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  VariantProps &
  StyleProps<typeof properties>;

export const Box = ({
  centered,
  evenly,
  fullwidth,
  hide,
  inline,
  wrap,
  render,
  children,
  ...props
}: BoxProps) => {
  const styles = { ...props.style, ...styleProps(props, properties) };
  const element = typeof render === "function" ? render() : render;

  if (isValidElement(element)) {
    return cloneElement(element, {
      ...props,
      children: children ?? element.props.children,
      className: cx(props.className, element.props.className),
      style: { ...props.style, ...styles },
    });
  }

  return (
    <div style={styles} {...props}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
