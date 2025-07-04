import { useId } from "react";
import { Box, type BoxProps } from "./box";

const uiid = "group";

export type GroupProps = BoxProps & {
  switch?: number;
};

export const Group = ({ switch: breakpoint, ...props }: GroupProps) => {
  const randomId = useId();
  const breakpointId = `${breakpoint}-${randomId}`;

  if (breakpoint && document) {
    const style = document.createElement("style");
    style.textContent = `@media (width <= ${breakpoint}px) {[uiid="${uiid}"][data-switch="${breakpointId}"] { flex-direction: column; }}`;
    document.head.appendChild(style);
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
