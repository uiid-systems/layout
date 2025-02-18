import type { Meta, StoryObj } from "@storybook/react";
import {
  disableArgTypes,
  convertStylePropertiesToArgTypes,
} from "@uiid/core/storybook";

import { Box } from "../components/box";
import { STYLE_PROPS } from "../constants";

const meta = {
  title: "Primitives/Box",
  component: Box,
  args: {
    hidden: false,
  },
  render: (args) => (
    <Box
      display="inline-flex"
      {...args}
      style={{ background: "tomato", width: 64, height: 64 }}
    />
  ),
  argTypes: {
    ...convertStylePropertiesToArgTypes(STYLE_PROPS, "Style\xa0Properties"),
    ...disableArgTypes("render", "ref"),
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Box" };
