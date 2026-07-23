import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

     console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    // await page.goto('https://demowebshop.tricentis.com/register');
    // await page.goto('https://practice.expandtesting.com/dropdown');
    await page.goto('https://demoqa.com/select-menu');

    // //multiselect dropdown 
    const multiSelectDropdown = page.locator('#react-select-4-input');
    await expect(multiSelectDropdown).toBeVisible();
    // await multiSelectDropdown.selectOption(['Green','Black']); //if selection dropdown is there
    await multiSelectDropdown.fill('Green');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await multiSelectDropdown.fill('Black');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
    console.log("Multi-select dropdown options selected");

  

    console.log("Tests completed successfully!");

}
);