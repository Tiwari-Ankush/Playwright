

import { test, expect } from '@playwright/test';

test('Complete test execution', async ({ page }) => {
    test.setTimeout(3000000);

    // await page.goto('https://practice.expandtesting.com/tables');
    await page.goto('https://demoqa.com/webtables');
    console.log("Navigated to the practice site...");

    //as records are not there so i am adding 50 records to check the pagination loop
    for (let i = 1; i <= 50; i++) {
        const user = {
            firstName: `Ankush${i}`,
            lastName: `Tiwari${i}`,
            email: `ankush${i}@gmail.com`,
            age: `${20 + i}`,
            salary: `${50000 + i * 1000}`,
            department: `IT${i}`
        };

        await page.getByRole('button', { name: 'Add' }).click();

        await page.getByPlaceholder('First Name').fill(user.firstName);
        await page.getByPlaceholder('Last Name').fill(user.lastName);
        await page.getByPlaceholder('name@example.com').fill(user.email);
        await page.getByPlaceholder('Age').fill(user.age);
        await page.getByPlaceholder('Salary').fill(user.salary);
        await page.getByPlaceholder('Department').fill(user.department);

        await page.getByRole('button', { name: 'Submit' }).click();
        console.log(`Added record ${i}`);

    }
    console.log("Added 50 records to the table for pagination testing");

    //pagination loop
    const targetRecord = 'Ankush45';
    const nextButton = page.getByRole('button', { name: 'Next' });

    while (true) {
        //check if the target record is present on the current page
        const recordLocator = page.getByRole('cell', { name: targetRecord ,exact: true});
        if (await recordLocator.isVisible()) {
            console.log(`Record ${targetRecord} found.`);
            break;
        }
        // If not found, click the next button to go to the next page

        // If target isn't here, check if the "Next" button is disabled
    // (Meaning we reached the last page and never found her)
        if (await nextButton.isDisabled()) {
            console.log(`Record ${targetRecord} not found in the table after checking all pages.`);
            break;
        }

        
        await nextButton.click();
        console.log("Clicked 'Next' button to navigate to the next page.");

        await page.waitForTimeout(1000); // Wait for the next page to load

    }




}
);





