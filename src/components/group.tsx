import { useId } from "react";
import { Box, type BoxProps } from "./box";
import { injectBreakpointStyle } from "../utils";

const uiid = "group";

export type GroupProps = BoxProps & {
  switch?: number;
};

export const Group = ({ switch: breakpoint, ...props }: GroupProps) => {
  const randomId = useId();
  const breakpointId = `${breakpoint}-${randomId}`;

  if (breakpoint) {
    injectBreakpointStyle(uiid, breakpointId, breakpoint, "flex-direction: column");
  }

  return (
    <Box
      uiid={uiid}
      data-switch={breakpoint ? breakpointId : undefined}
      {...props}
    />
  );
};

Group.displayName = "Group";
