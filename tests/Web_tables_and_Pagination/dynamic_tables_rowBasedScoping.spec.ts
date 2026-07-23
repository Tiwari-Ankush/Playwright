

import { test, expect } from '@playwright/test';

test('Complete test execution', async ({ page }) => {


    // await page.goto('https://practice.expandtesting.com/tables');
    await page.goto('https://demoqa.com/webtables');
    console.log("Navigated to the practice site...");

    //dynamic tables row based scoping
    const addNewRecordButton = page.getByRole('button', { name: 'Add' });
    await expect(addNewRecordButton).toBeVisible();
    await addNewRecordButton.click();
    console.log("Clicked on 'Add New Record' button");
    await page.waitForTimeout(2000);

    const firstNameInput = page.getByPlaceholder('First Name');
    await expect(firstNameInput).toBeVisible();
    await firstNameInput.fill('Ankush');
    console.log("Filled 'First Name' input with 'Ankush'");

    const lastNameInput = page.getByPlaceholder('Last Name');
    await expect(lastNameInput).toBeVisible();
    await lastNameInput.fill('Tiwari');
    console.log("Filled 'Last Name' input with 'Tiwari'");

    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await emailInput.fill('ankush.tiwari@example.com');
    console.log("Filled 'Email' input with 'ankush.tiwari@example.com'");

    const ageInput = page.getByPlaceholder('Age');
    await expect(ageInput).toBeVisible();
    await ageInput.fill('30');
    console.log("Filled 'Age' input with '30'");

    const salaryInput = page.getByPlaceholder('Salary');
    await expect(salaryInput).toBeVisible();
    await salaryInput.fill('50000');
    console.log("Filled 'Salary' input with '50000'");

    const departmentInput = page.getByPlaceholder('Department');
    await expect(departmentInput).toBeVisible();
    await departmentInput.fill('IT');
    console.log("Filled 'Department' input with 'IT'");

    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    console.log("Clicked on 'Submit' button");
    await page.waitForTimeout(2000);

    //fetching the newly added record from the table
    const firstNameAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[1]");
    await expect(firstNameAdded).toBeVisible();
    const firstNameAddedText = await firstNameAdded.textContent();
    console.log("Newly added record - First Name: " + firstNameAddedText);

    const lastNameAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[2]");
    await expect(lastNameAdded).toBeVisible();
    const lastNameAddedText = await lastNameAdded.textContent();
    console.log("Newly added record - Last Name: " + lastNameAddedText);

    const emailAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[3]");
    await expect(emailAdded).toBeVisible();
    const emailAddedText = await emailAdded.textContent();
    console.log("Newly added record - Email: " + emailAddedText);

    const ageAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[4]");
    await expect(ageAdded).toBeVisible();
    const ageAddedText = await ageAdded.textContent();
    console.log("Newly added record - Age: " + ageAddedText);

    const salaryAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[5]");
    await expect(salaryAdded).toBeVisible();
    const salaryAddedText = await salaryAdded.textContent();
    console.log("Newly added record - Salary: " + salaryAddedText);

    const departmentAdded = page.locator("//table[@class='-striped -highlight table table-striped table-bordered table-hover']//child::tbody/tr[4]/td[6]");
    await expect(departmentAdded).toBeVisible();
    const departmentAddedText = await departmentAdded.textContent();
    console.log("Newly added record - Department: " + departmentAddedText);

    await page.waitForTimeout(2000);

    //delete first 3 rows from table
    for (let i = 1; i <= 3; i++) {
        const deleteButton = page.locator("//span[@title='Delete']");
        await page.waitForTimeout(2000);
        await deleteButton.first().click();
        console.log("Clicked on 'Delete' button for row " + i);
        await page.waitForTimeout(2000);
    }
    console.log("Deleted first 3 rows from the table");

    console.log("Tests completed successfully!");


}
);