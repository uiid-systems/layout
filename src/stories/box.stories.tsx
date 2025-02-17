import type { Meta, StoryObj } from "@storybook/react";
import {
  disableArgTypes,
  convertStylePropertiesToArgTypes,
} from "@uiid/core/storybook";

import { Box } from "../components/box";
import * as properties from "../properties/style";

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {
    hidden: false,
  },
  render: (args) => (
    <Box
      display="inline-flex"
      {...args}
      style={{ background: "gold", width: 64, height: 64 }}
    />
  ),
  argTypes: {
    ...convertStylePropertiesToArgTypes(properties, "Style\xa0Properties"),
    ...disableArgTypes("render"),
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
