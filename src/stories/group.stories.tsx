import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "../components/group";

const meta = {
  title: "Layout/Group",
  component: Group,
  args: { gap: 1 },
  render: (args) => (
    <Group {...args}>
      <div style={{ background: "tomato", height: 64, width: 64 }} />
      <div style={{ background: "gold", height: 64, width: 64 }} />
      <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    </Group>
  ),
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Evenly: Story = {
  parameters: { layout: "fullscreen" },
  args: { evenly: true },
};

export const Wrap: Story = {
  args: { wrap: true, style: { maxWidth: 144 } },
};
