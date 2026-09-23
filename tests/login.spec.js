const { test, expect } = require('@playwright/test');

test('Valid Login - QA Task Manager', async ({ page }) => {

    await page.goto('http://127.0.0.1:3000');

    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');

    await page.click('button');

    await expect(page.locator('#dashboard-section')).toBeHidden();

});