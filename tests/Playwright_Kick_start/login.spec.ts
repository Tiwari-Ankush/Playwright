// 1. Import the test block and assertion tool from Playwright
import { test, expect } from '@playwright/test';

// 2. Define your test. Notice the 'async' keyword!
// We pass in the { page } object, which represents a single browser tab.
test('Verify Demo Web Shop homepage loads', async ({ page }) => {
    
    console.log("Navigating to the practice site...");
    
    // 3. Command the browser to go to the URL
    await page.goto('https://demowebshop.tricentis.com/');

    // 4. Perform a simple assertion (Check the page title)
    await expect(page).toHaveTitle('Demo Web Shop');
    
    console.log("Test completed successfully!");
});