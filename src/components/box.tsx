import { cx, type RenderProp } from "@uiid/core";
import {
  extractStyleAttributes,
  extractToggleAttributes,
} from "@uiid/style-props";
import * as STYLE_PROPS from "@uiid/style-props/styles";
import { isValidElement, cloneElement } from "react";

import type {
  LayoutNativeProps,
  LayoutStyleProps,
  LayoutToggleProps,
} from "../types";
import { TOGGLE_PROPS } from "../constants";

export type BoxProps = React.PropsWithChildren<{
  render?: RenderProp;
  ref?: React.Ref<any>;
  uiid?: string;
}> &
  LayoutNativeProps &
  LayoutStyleProps &
  LayoutToggleProps;

export const Box = ({ render, children, ...props }: BoxProps) => {
  const toggleAttrs = extractToggleAttributes(props, TOGGLE_PROPS);
  /** @todo fix types */
  const styleAttrs = extractStyleAttributes(props, STYLE_PROPS as any);

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
