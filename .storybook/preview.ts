import type { Preview } from "@storybook/react";

import "./globals.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Primitives", "Positional", "Wrappers", "Presentation"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
