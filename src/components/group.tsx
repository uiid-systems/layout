import { cx } from "@uiid/core/styles";
import { Box, type BoxProps } from "./box";

export type GroupProps = {
  evenly?: boolean;
} & BoxProps;

export const Group = ({ evenly, className, ...props }: GroupProps) => {
  return (
    <Box
      data-uiid-layout="group"
      className={cx(className, { evenly })}
      {...props}
    />
  );
};

Group.displayName = "Group";
