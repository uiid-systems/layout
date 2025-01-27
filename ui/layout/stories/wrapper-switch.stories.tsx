import type { Meta, StoryObj } from "@storybook/react";
import { WrapperSwitch } from "../wrapper-switch";

const meta = {
  title: "Wrapper: Switch",
  component: WrapperSwitch,
  args: {
    condition: true,
    wrappers: {
      true: <div className="bg-[mediumseagreen] size-16" />,
      false: <div className="bg-[tomato] size-16" />,
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
  name: "Wrapper: Switch",
};
