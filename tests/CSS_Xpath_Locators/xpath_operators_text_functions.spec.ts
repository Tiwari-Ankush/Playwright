// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    // xpath operators and text functions
    // Basic XPath by attribute
    const searchBox = page.locator("//input[@value='Search store']");
    await searchBox.fill('laptop');
    console.log("Filled the search box with 'laptop' using XPath by attribute.");

    // Multiple conditions (Find an input that is BOTH type='submit' AND name='login')
    const searchButton = page.locator("//input[@value='Search' and @class='button-1 search-box-button']");
    await searchButton.click();
    console.log("Clicked the search button using XPath with multiple conditions.");

    //// Exact Text Match (Finds a button that says exactly "Save")
    const laptopLink = page.locator("//a[text()='14.1-inch Laptop']");
    await laptopLink.click();
    console.log("Clicked on the '14.1-inch Laptop' link using XPath with exact text match.");
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/141-inch-laptop');
    console.log("Verified that the URL is now 'https://demowebshop.tricentis.com/141-inch-laptop' after clicking with XPath exact text match.");


    // Partial Text Match (Finds a div containing the word "Success")
    const shoppingCartLinkText = page.locator("//span[contains(text(), 'Shopping')]");
    await shoppingCartLinkText.waitFor();
    await shoppingCartLinkText.click();
    console.log("Clicked on the 'Shopping Cart' link using XPath with partial text match.");
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/cart');
    console.log("Verified that the URL is now 'https://demowebshop.tricentis.com/cart' after clicking with XPath partial text match.");
    
    console.log("Tests completed successfully!");
});


