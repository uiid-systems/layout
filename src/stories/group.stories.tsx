import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "../components/group";
import { Stack } from "../components/stack";

const meta = {
  title: "Positional/Group",
  component: Group,
  args: { gap: 4 },
  render: (args) => (
    <Stack gap={4} fullwidth>
      <Group {...args}>
        <Boxes />
      </Group>

      <Group {...args} wrap style={{ maxWidth: 144 }}>
        <Boxes />
      </Group>

      <Group {...args} ax="space-between" ay="center" fullwidth>
        <Boxes />
      </Group>

      <Group {...args} evenly>
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
    <div style={{ background: "tomato", height: 64, width: 64 }} />
    <div style={{ background: "gold", height: 64, width: 64 }} />
    <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
  </>
);
