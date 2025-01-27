import type { Meta, StoryObj } from "@storybook/react";

import { Layer } from "../components/layer";

const meta = {
  title: "Layout/Layer",
  component: Layer,
  args: {},
  render: (args) => (
    <Layer {...args}>
      <div className="bg-[tomato] size-16" />
      <div className="bg-[gold] size-16" />
      <div className="bg-[mediumseagreen] size-16" />
    </Layer>
  ),
} satisfies Meta<typeof Layer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OffsetX: Story = {
  name: "Offset X",
  args: { offset: { x: 20 } },
};

export const OffsetY: Story = {
  name: "Offset Y",
  args: { offset: { y: 20 } },
};

export const OffsetBoth: Story = {
  name: "Offset Both",
  args: { offset: { x: 20, y: 20 } },
};
