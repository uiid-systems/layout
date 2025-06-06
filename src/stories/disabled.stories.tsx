import type { Meta, StoryObj } from "@storybook/react";

import { Disabled } from "../components/disabled";

const meta = {
  title: "Wrappers/Disabled",
  component: Disabled,
  args: {
    disabled: true,
    children: <div style={{ background: "gold", height: 64, width: 64 }} />,
  },
  render: (args) => <Disabled {...args} />,
} satisfies Meta<typeof Disabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Disabled",
};
