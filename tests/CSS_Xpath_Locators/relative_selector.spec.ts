// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveTitle('Automation Exercise');

    // Relative Xpath (good practice)
    const productsTabRelativeXpath = page.locator("//ul[@class='nav navbar-nav']/li[2]");
    await productsTabRelativeXpath.click();
    console.log("Clicked on the 'Products' tab using relative Xpath selector.");
    await expect(page).toHaveURL('https://automationexercise.com/products');
    console.log("Verified that the URL is now 'https://automationexercise.com/products' after clicking with relative Xpath selector.");

    //Relative CSS Selector (good practice)
    const productsTabRelativeCss = page.locator('a[href="/products"]');
    await productsTabRelativeCss.click();
    console.log("Clicked on the 'Products' tab using relative CSS selector.");
    await expect(page).toHaveURL('https://automationexercise.com/products');
    console.log("Verified that the URL is still 'https://automationexercise.com/products' after clicking with relative CSS selector.");
    
    console.log("Test completed successfully!");
});


