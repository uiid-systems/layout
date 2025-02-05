import { isValidElement, cloneElement } from "react";

import { cx } from "@uiid/core";

import type { RenderProp, VariantProps } from "../types";
import { mapStyleProps, type StyleProps } from "../utils/mapStyleProps";

export type BoxProps = React.PropsWithChildren<{
  render?: (() => RenderProp) | RenderProp;
  ref?: React.Ref<any>;
}> &
  React.HTMLAttributes<HTMLElement> &
  VariantProps &
  StyleProps;

export const Box = ({
  /** variants */
  centered,
  evenly,
  fullwidth,
  hide,
  inline,
  wrap,
  /** composition */
  render,
  /** other */
  children,
  ref,
  ...props
}: BoxProps) => {
  const styles = mapStyleProps(props);

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
    <div data-uiid="box" style={{ ...props.style, ...styles }} {...props}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
