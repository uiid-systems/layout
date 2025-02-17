import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../components/stack";
import { Layer } from "../components/layer";

/**
 * @todo why is the first layer offset?
 * @todo handle fragments as layer children
 */
const meta = {
  title: "Positional/Layer",
  component: Layer,
  args: {},
  render: (args) => (
    <Stack gap={4}>
      <Layer {...args}>
        <div style={{ background: "tomato", height: 64, width: 64 }} />
        <div style={{ background: "gold", height: 64, width: 64 }} />
        <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
      </Layer>

      <Layer {...args} offset={{ x: 20 }}>
        <div style={{ background: "tomato", height: 64, width: 64 }} />
        <div style={{ background: "gold", height: 64, width: 64 }} />
        <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
      </Layer>

      <Layer {...args} offset={{ y: 20 }}>
        <div style={{ background: "tomato", height: 64, width: 64 }} />
        <div style={{ background: "gold", height: 64, width: 64 }} />
        <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
      </Layer>

      <Layer {...args} offset={{ x: 20, y: 20 }}>
        <div style={{ background: "tomato", height: 64, width: 64 }} />
        <div style={{ background: "gold", height: 64, width: 64 }} />
        <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
      </Layer>
    </Stack>
  ),
} satisfies Meta<typeof Layer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { name: "Layer" };

// const Boxes = () => (
//   <>
//     <div style={{ background: "tomato", height: 64, width: 64 }} />
//     <div style={{ background: "gold", height: 64, width: 64 }} />
//     <div style={{ background: "mediumseagreen", height: 64, width: 64 }} />
//   </>
// );
