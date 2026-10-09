import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// GitHub project pages serve from /<repo>/; the Pages workflow passes it in.
export default defineConfig({
  base: process.env.PAGES_BASE ?? "/",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  plugins: [tailwindcss(), react()],
});
