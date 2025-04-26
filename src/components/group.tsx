import { Box, type BoxProps } from "./box";

export type GroupProps = BoxProps;

export const Group = ({ ...props }: GroupProps) => {
  return <Box uiid="group" {...props} />;
};
Group.displayName = "Group";
