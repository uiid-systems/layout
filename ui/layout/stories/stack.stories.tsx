import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../components/stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  args: {},
  render: (args) => (
    <Stack gap="small" {...args}>
      <div className="bg-[tomato] size-16" />
      <div className="bg-[gold] size-16" />
      <div className="bg-[mediumseagreen] size-16" />
    </Stack>
  ),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Stack",
};

export const Evenly: Story = {
  args: {
    evenly: true,
    className: "h-[calc(100dvh-2rem)]",
  },
};

export const Wrap: Story = {
  args: {
    inline: true,
    wrap: true,
    className: "max-h-40",
  },
};
