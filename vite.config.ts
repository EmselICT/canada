import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/canada/",
  resolve: { tsconfigPaths: true },
  plugins: [react(), tailwindcss()],
});
