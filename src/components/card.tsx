import { cx, booleanProps } from "@uiid/core";

import { Box, type BoxProps } from "./box";

export type CardProps = BoxProps & {
  interactive?: boolean;
  rounded?: boolean;
};

export const Card = ({
  interactive,
  rounded,
  className,
  ...props
}: CardProps) => {
  const variants = booleanProps({ interactive, rounded });

  return (
    <Box data-uiid="card" className={cx(className, variants)} {...props} />
  );
};
