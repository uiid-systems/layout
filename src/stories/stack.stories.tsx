import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../components/stack";

const meta = {
  title: "Positional/Stack",
  component: Stack,
  args: { gap: 1 },
  render: (args) => (
    <Stack {...args}>
      <div style={{ background: "tomato", height: 64, width: 64 }} />
      <div style={{ background: "gold", height: 64, width: 64 }} />
      <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    </Stack>
  ),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Evenly: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    evenly: true,
    fullscreen: true,
  },
};

export const Wrap: Story = {
  args: {
    inline: true,
    wrap: true,
    style: { maxHeight: 144 },
  },
};
