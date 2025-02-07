import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/card";

const meta = {
  title: "Presentation/Card",
  component: Card,
  render: (args) => (
    <Card {...args} style={{ background: "gold", height: 64, width: 64 }} />
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  args: { interactive: true },
};
