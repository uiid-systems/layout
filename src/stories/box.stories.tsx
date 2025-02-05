import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {
    centered: true,
    fullwidth: true,
    evenly: true,
    inline: true,
    hide: true,
    ax: "between",
    ay: "baseline",
    direction: "row",
    visibility: "hidden",
  },
  render: (args) => <Box {...args} className="bg-[gold] size-16" />,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
