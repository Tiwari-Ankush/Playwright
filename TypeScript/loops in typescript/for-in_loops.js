"use strict";
const environmentSettings = { browser: "Chromium", isHeadless: true };
for (const key in environmentSettings) {
    console.log(`Configuration key found: ${key}`);
    // Outputs: "Configuration key found: browser", then "...isHeadless"
}
