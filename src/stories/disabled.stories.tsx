import type { Meta, StoryObj } from "@storybook/react";
import { disableArgTypes } from "@uiid/core/storybook";

import { Disabled } from "../components/disabled";

const meta = {
  title: "Wrappers/Disabled",
  component: Disabled,
  args: {
    disabled: true,
    children: <div style={{ background: "gold", height: 64, width: 64 }} />,
  },
  argTypes: disableArgTypes("children"),
  render: (args) => <Disabled {...args} />,
} satisfies Meta<typeof Disabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Disabled",
};
