import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    vanillaExtractPlugin()],
  server: {
    proxy: {
      "/notes": {
        target: "http://localhost:3002",
        changeOrigin: true, 
      },
    },
  },
});
