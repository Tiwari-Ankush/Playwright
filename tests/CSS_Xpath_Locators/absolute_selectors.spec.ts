// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveTitle('Automation Exercise');

    // Absolute Xpath (bad practice)
    const productsTab = page.locator("xpath=/html/body/header/div/div/div/div[2]/div/ul/li[2]");
    await productsTab.click();
    console.log("Clicked on the 'Products' tab using absolute selector.");

    await expect(page).toHaveURL('https://automationexercise.com/products');
    console.log("Verified that the URL is now 'https://automationexercise.com/products'.");

    //absolute CSS Selector (bad practice)
    const productsTabCss = page.locator("css=body > header > div > div > div > div:nth-child(2) > div > ul > li:nth-child(2)");
    await productsTabCss.click();
    console.log("Clicked on the 'Products' tab using absolute CSS selector.");
    await expect(page).toHaveURL('https://automationexercise.com/products');
    console.log("Verified that the URL is still 'https://automationexercise.com/products' after clicking with absolute CSS selector.");

    console.log("Test completed successfully!");
});


