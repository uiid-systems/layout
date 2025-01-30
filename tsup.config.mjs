import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["ui/layout/index.ts"],
  format: ["esm", "cjs"],
  target: "es2020",
  dts: true,
  treeshake: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
