import type { Meta, StoryObj } from "@storybook/react";
import { disableArgTypes } from "@uiid/core/storybook";

import { Box } from "../components/box";
import { Stack } from "../components/stack";

import { Slots } from "../components/slots";

const meta = {
  title: "Wrappers/Slots",
  component: Slots,
  args: {
    direction: "row",
    gap: 4,
    before: <Box style={{ background: "tomato", height: 64, width: 64 }} />,
    after: (
      <Box style={{ background: "mediumseagreen", height: 64, width: 64 }} />
    ),
  },
  argTypes: {
    ...disableArgTypes("before", "after", "render", "direction", "gap", "ref"),
  },
  render: (args) => (
    <Stack gap={1}>
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
