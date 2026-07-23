

import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop homepage loads', async ({ page }) => {


    await page.goto('https://practice.expandtesting.com/tables');
    console.log("Navigated to the practice site...");

    //static table
    const staticTable = page.locator("//table[@id='table1']");
    await expect(staticTable).toBeVisible();
    console.log("Static table is visible");
    await staticTable.locator("//tr[1]/td[1]").isVisible();
    console.log("Static table row 1 column 1 is visible");

    const lastname1 = await staticTable.locator("//tr[1]/td[1]");
    const lastname1Text = await lastname1.textContent();
    console.log("Static table row 1 column 1 text: " + lastname1Text);

    const firstname1 = await staticTable.locator("//tr[1]/td[2]");
    const firstname1Text = await firstname1.textContent();
    console.log("Static table row 1 column 2 text: " + firstname1Text);

    const email1 = await staticTable.locator("//tr[1]/td[3]");
    const email1Text = await email1.textContent();
    console.log("Static table row 1 column 3 text: " + email1Text);

    const due1 = await staticTable.locator("//tr[1]/td[4]");
    const due1Text = await due1.textContent();
    console.log("Static table row 1 column 4 text: " + due1Text);

    const website1 = await staticTable.locator("//tr[1]/td[5]");
    const website1Text = await website1.textContent();
    console.log("Static table row 1 column 5 text: " + website1Text);

    const action1 = await staticTable.locator("//tr[1]/td[6]");
    const action1Text = await action1.textContent();
    console.log("Static table row 1 column 6 text: " + action1Text);
    
    const editLinkClick = await staticTable.locator("//a[@href='#edit']");
    // await expect(editLinkClick).toBeVisible();
    await editLinkClick.first().click();
    console.log("Clicked on the edit link in the static table"); 
       
    await page.waitForTimeout(2000); //as edit page is not added in that website, only redirection added. so added wait for timeout to see the redirection. In real scenario, we can add wait for navigation or wait for element to be visible on the edit page.
    await expect(page).toHaveURL('https://practice.expandtesting.com/tables#edit');
    console.log("Redirected to edit page");


    console.log("Tests completed successfully!");


}
);