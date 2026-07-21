






import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveTitle('Automation Exercise');

    
    const altTextImage = page.getByAltText('demo website for practice').first();
    if (await altTextImage.isVisible()) {
        console.log("Image with alt text 'demo website for practice' is visible on the page.");
    } else {
        console.log("Image with alt text 'demo website for practice' is NOT visible on the page.");
    }
    
    
    console.log("Test completed successfully!");
});


