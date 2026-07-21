import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    // await page.getByRole('link',{name:'Computers'}).click();

    await expect(page.getByText('Computers')).toBeVisible();
    const computersLink= page.getByRole('link',{name:'Computers'});
    // await computersLink.first().click();
    await computersLink.nth(1).click();
    console.log(page.url());
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/computers');
    
    
    console.log("Test completed successfully!");
});