import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    // headless: true,
    headless: false,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    // Disabled to avoid FFmpeg dependency
    video: 'off',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
      },
    },
  ],
});