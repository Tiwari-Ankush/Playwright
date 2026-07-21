import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    // await expect(page.getByText('                    Welcome to our storehh')).toBeVisible();//error
    await expect(page.getByText('                    Welcome to our store')).toBeVisible();
    const title = await page.getByText( '                    Welcome to our store',{exact: true}).textContent();
    console.log("Page title:", title);


    console.log("Test completed successfully!");
});