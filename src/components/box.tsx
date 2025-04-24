import { cx, type RenderProp } from "@uiid/core";
import { styleProps } from "@uiid/style-props/utils";
import * as STYLE_PROPS from "@uiid/style-props/styles";

import { isValidElement, cloneElement } from "react";

import type { LayoutStyleProps, LayoutToggleProps } from "../types";
import { TOGGLE_PROPS } from "../constants";

export type BoxProps = React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  LayoutStyleProps &
  LayoutToggleProps & {
    render?: RenderProp;
    ref?: React.Ref<any>;
  };

export const Box = ({ render, children, ...props }: BoxProps) => {
  const toggleAttrs = extractToggleAttributes(props);
  /** @todo fix types */
  const styleAttrs = styleProps(props, STYLE_PROPS as any);

  const propsWithUiid = {
    uiid: "box",
    "uiid-cat": "layout",
    ...props,
    style: { ...props.style, ...styleAttrs },
    ...toggleAttrs,
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      className: cx(props.className, render.props.className),
    });
  }

  return <div {...propsWithUiid}>{children}</div>;
};
Box.displayName = "Box";

export const extractToggleAttributes = (props: Record<string, any>) => {
  return TOGGLE_PROPS.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key] === true ? "true" : props[key];
    }
    return acc;
  }, {} as Record<string, string>);
};
