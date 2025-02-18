import { cx, styleProps, booleanProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as STYLE_PROPS from "@uiid/style-props/styles";
import * as BOOLEAN_PROPS from "../properties/boolean";
import type { LayoutBooleanProps, LayoutStyleProps } from "../types";

export type BoxProps = {
  render?: RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  LayoutBooleanProps &
  LayoutStyleProps;

type StyleObject = Record<string, React.CSSProperties>;

export const Box = ({ render, children, ...props }: BoxProps) => {
  const styles = styleProps(props, STYLE_PROPS);
  const variants = booleanProps(props, BOOLEAN_PROPS);

  const propsWithUiid = {
    "data-uiid-layout": "box",
    ...props,
    style: { ...styles, ...variants },
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      className: cx(props.className, render.props.className),
    } as React.HTMLAttributes<HTMLElement>);
  }

  return <div {...propsWithUiid}>{children}</div>;
};

Box.displayName = "Box";
