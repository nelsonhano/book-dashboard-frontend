// src/theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "table": {
      background: "transparent",
    },
    "th, td, tr": {
      background: "transparent",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
