import { isValidElement, cloneElement, useId } from "react";

import { cx } from "@uiid/core";

import { responsiveProps, type StyleProps } from "../responsive-props";
import type { VariantProps } from "../types";

type Render = React.ReactElement<
  React.PropsWithChildren<{ className?: string; "data-uiid-unique": string }>
>;

export type BoxProps = React.PropsWithChildren<{
  render?: (() => Render) | Render;
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
  /** styles */
  ax,
  ay,
  direction,
  /** composition */
  render,
  /** other */
  children,
  ref,
  ...props
}: BoxProps) => {
  const unique = useId();

  const responsiveProps2 = { ax, ay, direction };
  const hasResponsiveProps = !!Object.values(responsiveProps2).join("");

  const ids = {
    "data-uiid": "box",
    "data-uiid-unique": unique,
  };

  const common = {
    ...ids,
    "data-centered": centered,
    "data-evenly": evenly,
    "data-fullwidth": fullwidth,
    "data-hide": hide,
    "data-inline": inline,
    "data-wrap": wrap,
    ...props,
  };

  const style = hasResponsiveProps && (
    <style
      dangerouslySetInnerHTML={{
        __html: responsiveProps({
          props: { ax, ay, direction },
          selector: `[data-uiid-unique="${unique}"]`,
        }),
      }}
    />
  );

  if (typeof render === "function") {
    const rendered = render();
    return cloneElement(rendered, {
      ...common,
      children: (
        <>
          {responsiveProps2 && style}
          {children || rendered.props.children}
        </>
      ),
      className: cx(props.className, rendered.props.className),
    });
  }

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...common,
      children: (
        <>
          {style}
          {children || render.props.children}
        </>
      ),
      className: cx(props.className, render.props.className),
    });
  }

  return (
    <div {...common}>
      {style}
      {children}
    </div>
  );
};

Box.displayName = "Box";
