import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";
import { Group } from "../components/group";
import { Stack } from "../components/stack";

const meta = {
  title: "Positional/Group",
  component: Group,
  args: { gap: 1 },
  render: (args) => (
    <Stack gap={1} fullwidth>
      <Group {...args}>
        <Boxes />
      </Group>

      <Group {...args} ax="space-between" fullwidth>
        <Boxes />
      </Group>

      <Group {...args} fullwidth evenly>
        <Boxes />
      </Group>
    </Stack>
  ),
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Group" };

const Boxes = () => (
  <>
    <Box style={{ background: "tomato", height: 64, width: 64 }} />
    <Box style={{ background: "gold", height: 64, width: 64 }} />
    <Box style={{ background: "mediumseagreen", height: 64, width: 64 }} />
  </>
);
