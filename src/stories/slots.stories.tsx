import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";
import { Stack } from "../components/stack";

import { Slots } from "../components/slots";

const meta = {
  title: "Wrappers/Slots",
  component: Slots,
  args: {
    direction: "row",
    gap: 4,
    before: <div style={{ background: "tomato", height: 64, width: 64 }} />,
    after: (
      <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    ),
  },
  render: (args) => (
    <Stack gap={4}>
      <Slots {...args}>
        <Box style={{ background: "gold", height: 64, width: 64 }} />
      </Slots>
      <Slots {...args} direction="column">
        <Box style={{ background: "gold", height: 64, width: 64 }} />
      </Slots>
      <Slots {...args} before={undefined}>
        <Box style={{ background: "gold", height: 64, width: 64 }} />
      </Slots>
      <Slots {...args} after={undefined}>
        <Box style={{ background: "gold", height: 64, width: 64 }} />
      </Slots>
      <Slots {...args} before={undefined} after={undefined}>
        <Box style={{ background: "gold", height: 64, width: 64 }} />
      </Slots>
    </Stack>
  ),
} satisfies Meta<typeof Slots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Slots",
};
