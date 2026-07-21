import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {

    console.log("Navigating to the practice site...");

    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    
    const loginLink = page.getByRole('link', { name: 'Log in' });
    loginLink.click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    console.log("Navigated to Login page successfully!");

    const emailInput = page.getByLabel('Email:');
    await emailInput.click();
    console.log("Clicked on Email input field successfully!");
    await emailInput.fill('ankushtiwari');
    console.log("Filled in the Email input field successfully!");
    
    const passwordInput = page.getByLabel('Password:');
    await passwordInput.click();
    console.log("Clicked on Password input field successfully!");
    await passwordInput.fill('ankushtiwari');
    console.log("Filled in the Password input field successfully!");

    console.log("Test completed successfully!");
});