import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: fs.readFileSync("secrets/cert.key"),
  //     cert: fs.readFileSync("secrets/cert.crt"),
  //   },
  // },
  plugins: [react()],
});
