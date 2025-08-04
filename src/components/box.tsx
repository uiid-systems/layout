import { cx, type RenderProp } from "@uiid/core";
import {
  extractStyleAttributes,
  extractToggleAttributes,
} from "@uiid/style-props";
import * as STYLE_PROPS from "@uiid/style-props/styles";
import { isValidElement, cloneElement } from "react";

import type { LayoutBaseComponentProps } from "../types";
import { TOGGLE_PROPS } from "../constants";

export type BoxProps = React.PropsWithChildren<{
  render?: RenderProp;
  ref?: React.Ref<any>;
}> &
  LayoutBaseComponentProps;

const prepareProps = (props: Omit<BoxProps, "render" | "children">) => {
  const toggleAttrs = extractToggleAttributes(props, TOGGLE_PROPS);
  const styleAttrs = extractStyleAttributes(props, STYLE_PROPS as any);

  return {
    "data-uiid": "box",
    ...props,
    style: { ...props.style, ...styleAttrs },
    ...toggleAttrs,
  };
};

const renderWithProps = (
  render: RenderProp,
  children: React.ReactNode,
  propsWithUiid: Record<string, any>
) => {
  return cloneElement(render, {
    ...propsWithUiid,
    children: children ?? render.props.children,
    className: cx(propsWithUiid.className, render.props.className),
  });
};

export const Box = ({ render, children, ...props }: BoxProps) => {
  const propsWithUiid = prepareProps(props);

  if (isValidElement(render)) {
    return renderWithProps(render, children, propsWithUiid);
  }

  return <div {...propsWithUiid}>{children}</div>;
};
Box.displayName = "Box";
