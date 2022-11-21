import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "http://localhost:5000/",
      "/api/signup": "http://localhost:5000/",
      "/api/user": "http://localhost:5000/",
    },
  },
  plugins: [react()],
});
