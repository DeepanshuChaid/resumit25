import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: true,
    allowedHosts: [
      'a4971f6e-0d4c-4f1f-95f7-87b2884c1b38-00-2a0l8e958s9lz.pike.replit.dev'
    ]
  }
});
