const {test, expect} = require('@playwright/test');

test("API Mocking Example",async ({page}) => {
    //Mocking API Response
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits',async route=>{
        const json = [{name: 'Testing',id:30}];
        await route.fulfill({json});
    });
    await page.goto('https://demo.playwright.dev/api-mocking');

    await expect(page.getByText('Testing')).toBeVisible();
});