import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://automationexercise.com/products');

    // await expect(page).toHaveTitle('YouTube');

    
    const placeholderInput = page.getByPlaceholder('Search Product');
    await placeholderInput.click();
    console.log("Clicked on Search input field successfully!");
    await placeholderInput.fill('Ankush Tiwari');
    console.log("Filled in the Search input field successfully!");

    

    console.log("Test completed successfully!");
});