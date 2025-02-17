import { cx, booleanProps, styleProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as styleProperties from "../properties";
import type { LayoutBooleanProps, LayoutStyleProps } from "../types";

export type BoxProps = {
  render?: RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  LayoutBooleanProps &
  LayoutStyleProps;

export const Box = ({
  disabled,
  hidden,
  inactive,
  interactive,
  render,
  className,
  children,
  ...props
}: BoxProps) => {
  const styles = styleProps(props, styleProperties);
  const variants = booleanProps({ disabled, hidden, inactive, interactive });

  const propsWithUiid = {
    "data-uiid-layout": "box",
    ...props,
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      style: styles,
      className: cx(variants, className, render.props.className),
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <div {...propsWithUiid} style={styles} className={cx(variants, className)}>
      {children}
    </div>
  );
};

Box.displayName = "Box";
