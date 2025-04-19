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

export const Box = ({ render, children, ...allProps }: BoxProps) => {
  const styles = styleProps(allProps, STYLE_PROPS);
  const variants = booleanProps(allProps, TOGGLE_PROPS);

  // Destructure all the toggle and style props to remove them
  // Create an array of all the props we want to filter out
  const togglePropKeys = Object.keys(TOGGLE_PROPS) as Array<
    keyof typeof TOGGLE_PROPS
  >;
  const stylePropKeys = Object.keys(STYLE_PROPS) as Array<
    keyof typeof STYLE_PROPS
  >;

  // Create a new props object without the toggle/style props
  // This avoids TypeScript errors by using a record
  const filteredProps: Record<string, unknown> = { ...allProps };

  // Remove toggle props
  togglePropKeys.forEach((key) => {
    if (key in filteredProps) {
      delete filteredProps[key as string];
    }
  });

  // Remove style props
  stylePropKeys.forEach((key) => {
    if (key in filteredProps) {
      delete filteredProps[key as string];
    }
  });

  const propsWithUiid = {
    "data-uiid": "layout-box",
    ...filteredProps,
    style: { ...styles, ...variants },
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      className: cx(allProps.className, render.props.className),
    });
  }

  return <div {...propsWithUiid}>{children}</div>;
};
Box.displayName = "Box";
