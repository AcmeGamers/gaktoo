import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "http://localhost:5000/",
      "/api/signup": "http://localhost:5000/",
      "/api/user": "http://localhost:5000/",
      "/api/comment": "http://localhost:5000/",
      "/api/fetch-comment": "http://localhost:5000/",
      "/api/get-all-users": "http://localhost:5000/",
    },
  },
  plugins: [react()],
});
