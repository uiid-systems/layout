import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";

const meta = {
  title: "Primitives/Box",
  component: Box,
  render: (args) => <Box {...args} className="bg-[gold] size-16" />,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };

export const Centered: Story = {
  render: () => (
    <Box fullscreen center>
      <Box className="bg-[gold] size-16" />
    </Box>
  ),
};

export const Hide: Story = {
  args: { hide: true },
};
