import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import external from "rollup-plugin-peer-deps-external";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactModals",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      plugins: [external() as any],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  plugins: [dts()],
});
