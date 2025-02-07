import type { Meta, StoryObj } from "@storybook/react";

import { WrapperSlots } from "../components/wrapper-slots";

const meta = {
  title: "Wrappers/Slots",
  component: WrapperSlots,
  args: {
    before: <div style={{ background: "tomato", height: 64, width: 64 }} />,
    after: (
      <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    ),
  },
  render: (args) => (
    <WrapperSlots {...args}>
      <div style={{ background: "gold", height: 64, width: 64 }} />
    </WrapperSlots>
  ),
} satisfies Meta<typeof WrapperSlots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Slots",
};
