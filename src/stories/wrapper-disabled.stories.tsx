import type { Meta, StoryObj } from "@storybook/react";

import { WrapperDisabled } from "../components/wrapper-disabled";

const meta = {
  title: "Wrappers/Disabled",
  component: WrapperDisabled,
  args: {
    disabled: true,
    children: <div style={{ background: "gold", height: 64, width: 64 }} />,
  },
  render: (args) => <WrapperDisabled {...args} />,
} satisfies Meta<typeof WrapperDisabled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Disabled",
};
