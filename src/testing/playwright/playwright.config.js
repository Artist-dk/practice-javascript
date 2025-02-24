import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "node src/node/server.js",
    port: 3000,
  },
  use: {
    headless: true,
  },
});
