import type { Meta, StoryObj } from "@storybook/react";
import { disableArgTypes } from "@uiid/core/storybook";

import { Box } from "../components/box";

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {
    hidden: false,
  },
  render: (args) => (
    <Box
      {...args}
      p={2}
      m={2}
      interactive
      style={{ background: "tomato", width: 64, height: 64 }}
    />
  ),
  argTypes: {
    ...disableArgTypes("render", "ref"),
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
