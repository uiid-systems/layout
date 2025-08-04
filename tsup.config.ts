import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.css"],
  treeshake: false,
  sourcemap: false,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ["esm"],
  external: ["react", "react-dom", "@uiid/core", "@uiid/style-props"],
  injectStyle: false,
  noExternal: [],
});
