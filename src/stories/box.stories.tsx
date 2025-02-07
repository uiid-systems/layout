import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";

const meta = {
  title: "Primitives/Box",
  component: Box,
  render: (args) => (
    <Box {...args} style={{ background: "gold", height: 64, width: 64 }} />
  ),
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };

export const Centered: Story = {
  render: () => (
    <Box fullscreen center>
      <Box style={{ background: "gold", height: 64, width: 64 }} />
    </Box>
  ),
};

export const Hide: Story = {
  args: { hide: true },
};
