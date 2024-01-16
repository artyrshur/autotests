import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause(200)
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('secret_sauce')
    await page.pause()
    await page.locator('//input[@name="password"]').fill('ecret_sauce')
    await page.pause()
    await page.click('id=login-button')
    await page.screenshot({ path: 'screenshots/screenshot4.png', fullPage: true });
    await page.locator('[id=user-name]').fill('problem_user')
    await page.click('id=user-name')
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
    await page.pause()
    //css selector
    //#login-button
    await page.locator('#login-button').click()
    await page.screenshot({ path: 'screenshots/screenshot1.png', fullPage: true });
    await page.pause()
    //using xpath
    // await page.locator('xpath=//input[@name="password"]').fill('Faradeu')
    await page.locator('//input[@name="password"]').fill('secret_sauce')
    await page.pause()
    await page.click('id=login-button')
    await page.screenshot({ path: 'screenshots/screenshot2.png', fullPage: true });
    await page.pause()
    //using Text
    //await page.locator('text=LOGIN').click()
});
