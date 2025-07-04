import { useId } from "react";
import { Box, type BoxProps } from "./box";
import { StyleInjector } from "./style-injector";

const uiid = "group";

export type GroupProps = BoxProps & {
  switch?: number;
};

export const Group = ({ switch: breakpoint, ...props }: GroupProps) => {
  const randomId = useId();
  const breakpointId = `${breakpoint}-${randomId}`;

  const css = breakpoint
    ? `@media (width <= ${breakpoint}px) {[uiid="${uiid}"][data-switch="${breakpointId}"] { flex-direction: column; }}`
    : "";

  return (
    <>
      {breakpoint && (
        <StyleInjector id={`${uiid}-style-${breakpointId}`} css={css} />
      )}
      <Box
        uiid={uiid}
        data-switch={breakpoint ? breakpointId : undefined}
        {...props}
      />
    </>
  );
};

Group.displayName = "Group";
