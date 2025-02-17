import type { Meta, StoryObj } from "@storybook/react";
import {
  disableArgTypes,
  convertStylePropertiesToArgTypes,
} from "@uiid/core/storybook";

import { Box } from "../components/box";
import * as properties from "../properties";
import { Stack } from "../components/stack";

const Placeholder = (props: any) => (
  <Box {...props} style={{ background: "tomato" }} />
);

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {
    ax: "between",
  },
  render: (args) => (
    <Stack gap={8}>
      <Placeholder {...args}>Default</Placeholder>
      <Placeholder {...args} disabled>
        Disabled
      </Placeholder>
      <Placeholder {...args} interactive>
        Interactive
      </Placeholder>
    </Stack>
  ),
  argTypes: {
    ...convertStylePropertiesToArgTypes(properties, "Style\xa0Properties"),
    ...disableArgTypes("render"),
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
