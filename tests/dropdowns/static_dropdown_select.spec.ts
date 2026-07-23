import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

     console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    // await page.goto('https://demowebshop.tricentis.com/register');
    await page.goto('https://practice.expandtesting.com/dropdown');

    // //dropdown select

    //get by label
    const dropdown = page.locator('#dropdown');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption({ label: 'Option 2' });
    console.log("Dropdown option selected");
    await expect(dropdown).toHaveValue('2');


    //get by value
    const dropdownValue = page.locator('#dropdown');
    await expect(dropdownValue).toBeVisible();
    await dropdownValue.selectOption({ value: '2' });
    console.log("Dropdown option selected by value");
    await expect(dropdownValue).toHaveValue('2');

    //get by index
    const dropdownIndex = page.locator('#dropdown');
    await expect(dropdownIndex).toBeVisible();
    await dropdownIndex.selectOption({ index: 2 });
    console.log("Dropdown option selected by index");
    await expect(dropdownIndex).toHaveValue('2');

    
    console.log("Tests completed successfully!");
}
)
