// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    await page.goto('https://demowebshop.tricentis.com/');

    // await expect(page).toHaveTitle('Automation Exercise');

    // CSS Locators
    //id selector
    const searchBox = page.locator('#small-searchterms');
    await searchBox.fill('laptop');
    console.log("Filled the search box with 'laptop' using ID selector.");

    //class selector
    const searchButton = page.locator('.button-1.search-box-button');
    await searchButton.click();
    console.log("Clicked the search button using class selector.");

    // Attribute Selector (Highly recommended for custom test attributes)
    const addToCartButton = page.locator("input[value='Add to cart']");
    await addToCartButton.click();
    console.log("Clicked the 'Add to cart' button using attribute selector.");

    // Combinator: Find a button inside a specific form
    const shoppingCartButton = page.locator('li#topcartlink a.ico-cart');
    await shoppingCartButton.click();
    console.log("Clicked on the 'Shopping Cart' button using combinator selector.");
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/cart');
    console.log("Clicked on the 'Shopping Cart' button using combinator selector and verified the URL is now 'https://demowebshop.tricentis.com/cart'.");
    
    console.log("Tests completed successfully!");
});


