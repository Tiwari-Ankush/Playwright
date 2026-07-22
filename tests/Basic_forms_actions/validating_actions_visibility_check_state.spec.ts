
// Do not use .click() on checkboxes or radio buttons. If a checkbox is already checked, a click() will accidentally uncheck it!

// Instead, use check() and uncheck(). These are "smart" methods. If you tell Playwright to check() a box that is already checked, it will simply do nothing and move on, ensuring your test stays stable.
import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

     console.log("Navigating to the practice site...");

    // await page.goto('https://automationexercise.com/');
    await page.goto('https://demowebshop.tricentis.com/register');


    
    //radio buttons
    const radioButton = page.locator('#gender-male');
    await expect(radioButton).toBeVisible();
    console.log("Radio button is visible");
    await radioButton.check();
    await expect(radioButton).toBeChecked(); // Validating Actions (Visibility & Check State)
    console.log("Radio button is checked");
 
    // redirect to login page
    const loginLink = page.locator('a.ico-login');
    await expect (loginLink).toBeVisible(); // Validating Actions (Visibility & Check State)
    await loginLink.click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    console.log("Redirected to login page");

    // checkboxes
    const checkbox = page.locator('#RememberMe');
    await expect(checkbox).toBeVisible();
    console.log("Checkbox is visible");
    await checkbox.check();
    await expect(checkbox).toBeChecked(); // Validating Actions (Visibility & Check State)
    console.log("Checkbox is checked");
    console.log("Checkbox is checked: " + await checkbox.isChecked());
    //  Validating it is NOT checked (using .not)
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    console.log("Checkbox is unchecked");

    console.log("Tests completed successfully!");
});


