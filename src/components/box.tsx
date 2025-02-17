import { cx, styleProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import { BOOLEAN_PROPS } from "../constants";
import * as styleProperties from "../properties";
import type { LayoutBooleanProps, LayoutStyleProps } from "../types";

type BooleanConfigProps = Partial<Record<string, boolean>>;

export const booleanProps = <T extends readonly string[]>(
  props: Record<string, any>,
  booleanProperties: T
) => {
  const classes = booleanProperties
    .filter((key) => props[key] === true)
    .join(" ");

  return classes;
};

export type BoxProps = {
  render?: RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  LayoutBooleanProps &
  LayoutStyleProps;

export const Box = ({ render, className, children, ...props }: BoxProps) => {
  const styles = styleProps(props, styleProperties);
  const variants = booleanProps(props, BOOLEAN_PROPS);

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
