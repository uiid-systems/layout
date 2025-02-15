import type { Meta, StoryObj } from "@storybook/react";
import {
  disableArgTypes,
  convertStylePropertiesToArgTypes,
} from "@uiid/core/storybook";

import { Box } from "../components/box";
import * as properties from "../properties";

const meta = {
  title: "Primitives/Box",
  component: Box,
  render: (args) => (
    <Box {...args} style={{ background: "gold", height: 64, width: 64 }} />
  ),
  args: {
    center: false,
  },
  argTypes: {
    ...disableArgTypes("render"),
    ...convertStylePropertiesToArgTypes(properties, "Style\xa0Properties"),
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
