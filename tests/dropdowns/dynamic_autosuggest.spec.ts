import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    // await page.goto('https://demowebshop.tricentis.com/register');
    // await page.goto('https://practice.expandtesting.com/dropdown');
    // await page.goto('https://demoqa.com/select-menu');
    await page.goto('https://google.com/');

    //dynamic autosuggest dropdown
    const dynamicAutosuggestDropdown = page.locator("//textarea[@aria-label='Search' and @name='q']");
    await expect(dynamicAutosuggestDropdown).toBeVisible();
    await dynamicAutosuggestDropdown.fill('Laptop');
    console.log("Filled search input with 'Laptop'");
    await page.waitForTimeout(2000);
    // const laptopOption = page.getByRole('option', { name: 'laptop service near me' });
    // await expect(laptopOption).toBeVisible();
    // await laptopOption.click();
    
    const laptopOption = page.locator("div[role='option']");
    await page.waitForTimeout(2000);
    await laptopOption.nth(3).click(); // Click on the option in the dynamic autosuggest dropdown
    await page.waitForTimeout(2000);
    console.log("Clicked on the option from the dynamic autosuggest dropdown");

    console.log("Tests completed successfully!");

}
);