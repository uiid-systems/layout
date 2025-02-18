import { cx, styleProps, booleanProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import { STYLE_PROPS, TOGGLE_PROPS } from "../constants";
import type { LayoutBooleanProps, LayoutStyleProps } from "../types";

export type BoxProps = React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  LayoutBooleanProps &
  LayoutStyleProps & {
    render?: RenderProp;
    ref?: React.Ref<any>;
  };

export const Box = ({ render, children, ...props }: BoxProps) => {
  const styles = styleProps(props, STYLE_PROPS);
  const variants = booleanProps(props, TOGGLE_PROPS);

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
