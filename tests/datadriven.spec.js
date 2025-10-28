const { test, expect } = require('@playwright/test');

const fs = require('fs');

const path = 'TestData/data.json';

const testData = JSON.parse(fs.readFileSync(path, 'utf-8'));

for (const user of testData) {
     test(`Login with user ${user.username}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.fill("//input[@name='user-name']", user.username);
        await page.fill("//input[@name='password']", user.password);
        await page.click("//input[@name='login-button']");
    });
}