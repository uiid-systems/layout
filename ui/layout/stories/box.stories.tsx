import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";

const meta = {
  title: "Box",
  component: Box,
  args: {},
  render: (args) => <Box {...args} className="bg-[gold] size-16" />,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Box",
};
