import type { Meta, StoryObj } from "@storybook/react";

import { WrapperSwitch } from "../components/wrapper-switch";

const meta = {
  title: "Wrappers/Switch",
  component: WrapperSwitch,
  args: {
    condition: true,
    wrappers: {
      true: (
        <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
      ),
      false: <div style={{ background: "tomato", height: 64, width: 64 }} />,
    },
  },
  argTypes: {
    condition: { type: "boolean" },
    children: { table: { disable: true } },
    wrappers: { table: { disable: true } },
  },
  render: (args) => <WrapperSwitch {...args} />,
} satisfies Meta<typeof WrapperSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Switch",
};
