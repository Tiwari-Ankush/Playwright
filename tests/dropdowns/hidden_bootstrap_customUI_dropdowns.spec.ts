import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    // await page.goto('https://demowebshop.tricentis.com/register');
    // await page.goto('https://practice.expandtesting.com/dropdown');
    // await page.goto('https://demoqa.com/select-menu');
    // await page.goto('https://google.com/');
    await page.goto('https://select2.org/dropdown');
    await page.locator("//span[@class='select2-selection select2-selection--single']").click();
    await page.waitForTimeout(2000);
    // const searchInput = page.locator("//input[@class='select2-search__field' and @role='searchbox']");
    // await expect(searchInput).toBeVisible();
    // await searchInput.fill('Alaska');
    await page.keyboard.type('AL', { delay: 100 });
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
    // await page.locator("//li[@id='select2-edzx-result-3cc9-AK']").click();
    
    await page.waitForTimeout(2000);
    console.log("Tests completed successfully!");

}
);