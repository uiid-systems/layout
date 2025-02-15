import type { Meta, StoryObj } from "@storybook/react";

import { Slots } from "../components/slots";

const meta = {
  title: "Wrappers/Slots",
  component: Slots,
  args: {
    direction: "row",
    before: <div style={{ background: "tomato", height: 64, width: 64 }} />,
    after: (
      <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    ),
  },
  render: (args) => (
    <Slots {...args}>
      <div style={{ background: "gold", height: 64, width: 64 }} />
    </Slots>
  ),
} satisfies Meta<typeof Slots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Slots",
};
