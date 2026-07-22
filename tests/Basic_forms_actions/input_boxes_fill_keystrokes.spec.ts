// Absolute Selectors (NEVER USE THESE): These map the exact, rigid path from the very top of the HTML tree down to your element. If a developer adds a single new <div> anywhere in that path, your test breaks instantly.








import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    await page.goto('https://demowebshop.tricentis.com/register');

    // await expect(page).toHaveTitle('Demo Web Shop');

    // Standard fill (Instantly clears and enters text)
    // const searchInput = page.locator('//input[@id="small-searchterms"]');
    const searchInput = page.locator('#small-searchterms');

    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEditable();
    
    await searchInput.fill('laptop');
    await page.waitForTimeout(2000);
    console.log("Filled search input with 'laptop'");

    //clear the input box
    await searchInput.clear();
    console.log("Cleared search input");

    // Keystroke fill (Simulates typing each character with a delay)
   const keystrokeInput = page.locator('#small-searchterms');
   await keystrokeInput.pressSequentially('laptop', { delay: 500 });
   console.log("Filled search input with 'laptop' using keystrokes");


    console.log("Tests completed successfully!");
});


