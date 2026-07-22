// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    // complex elements with xpath axes
    // Parent / Ancestor (.. or parent::)
    const searchInput = await page.locator("//div[@class='header-selectors-wrapper']/parent::div/div[3]/form/input[@value='Search store' or @name='q']");
    await searchInput.fill('laptop');
    console.log("Filled the search box with 'laptop' using XPath with parent axis.");

    // Following Sibling (following-sibling::)
    const searchButton = await page.locator("//input[@value='Search store' or @id='small-searchterms']/following-sibling::input[@type='submit' and @value='Search']");
    await searchButton.click();
    console.log("Clicked the search button using XPath with following-sibling axis.");

    //child (child::)
    const addToCartButton = await page.locator("//div[@class='buttons']//child::input[@value='Add to cart']");
    await addToCartButton.click();
    console.log("Clicked the 'Add to cart' button using XPath with child axis.");
    
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the cart is updated
    await page.locator("//a[@class='ico-cart']//child::span[@class='cart-label']").click();
    console.log("Clicked on the 'Shopping Cart' link using XPath with child axis.");
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/cart');
    console.log("Verified that the URL is now 'https://demowebshop.tricentis.com/cart' after clicking with XPath child axis.");
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the cart page is fully loaded

    console.log("Tests completed successfully!");

});


