import type { Meta, StoryObj } from "@storybook/react";

import { WrapperSlots } from "../components/wrapper-slots";

const meta = {
  title: "Wrappers/Slots",
  component: WrapperSlots,
  args: {
    gap: "small",
    before: <div className="bg-[tomato] size-16" />,
    after: <div className="bg-[mediumseagreen] size-16" />,
  },
  render: (args) => (
    <WrapperSlots {...args}>
      <div className="bg-[gold] size-16" />
    </WrapperSlots>
  ),
} satisfies Meta<typeof WrapperSlots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Slots",
};
