import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {},
  render: (args) => (
    <Box
      {...args}
      p={2}
      m={2}
      interactive
      style={{ background: "tomato", width: 64, height: 64 }}
    />
  ),
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
