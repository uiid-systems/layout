import type { Meta, StoryObj } from "@storybook/react";
import { Group } from "../group";

const meta = {
  title: "Group",
  component: Group,
  args: {},
  render: (args) => (
    <Group gap="small" {...args}>
      <div className="bg-[tomato] size-16" />
      <div className="bg-[gold] size-16" />
      <div className="bg-[mediumseagreen] size-16" />
    </Group>
  ),
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Evenly: Story = {
  args: { evenly: true },
};

export const Wrap: Story = {
  args: { wrap: true, className: "max-w-40" },
};
