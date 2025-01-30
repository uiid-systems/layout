import type { Meta, StoryObj } from "@storybook/react";

import { WrapperConditional } from "../components/wrapper-conditional";

const meta = {
  title: "Wrappers/Conditional",
  component: WrapperConditional,
  args: {
    condition: true,
    wrapper: <div className="bg-[gold] size-16" />,
  },
  argTypes: {
    condition: { type: "boolean" },
    children: { table: { disable: true } },
    wrapper: { table: { disable: true } },
  },
  render: (args) => <WrapperConditional {...args} />,
} satisfies Meta<typeof WrapperConditional>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Conditional",
};
