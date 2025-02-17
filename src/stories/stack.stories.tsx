import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../components/box";
import { Group } from "../components/group";
import { Stack } from "../components/stack";

const meta = {
  title: "Positional/Stack",
  component: Stack,
  args: { gap: 4 },
  render: (args) => (
    <Group gap={4} fullscreen>
      <Stack {...args}>
        <Boxes />
      </Stack>

      <Stack {...args} wrap style={{ maxHeight: 144 }}>
        <Boxes />
      </Stack>

      <Stack {...args} ay="space-between" fullheight>
        <Boxes />
      </Stack>

      <Stack {...args} fullheight evenly>
        <Boxes />
      </Stack>
    </Group>
  ),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Stack " };

const Boxes = () => (
  <>
    <Box style={{ background: "tomato", height: 64, width: 64 }} />
    <Box style={{ background: "gold", height: 64, width: 64 }} />
    <Box style={{ background: "mediumseagreen", height: 64, width: 64 }} />
  </>
);
