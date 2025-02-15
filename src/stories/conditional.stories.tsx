import type { Meta, StoryObj } from "@storybook/react";

import { Conditional } from "../components/conditional";

const meta = {
  title: "Wrappers/Conditional",
  component: Conditional,
  args: {
    condition: true,
    wrapper: <div style={{ background: "gold", height: 64, width: 64 }} />,
  },
  argTypes: {
    condition: { type: "boolean" },
    children: { table: { disable: true } },
    wrapper: { table: { disable: true } },
  },
  render: (args) => <Conditional {...args} />,
} satisfies Meta<typeof Conditional>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Conditional",
};
