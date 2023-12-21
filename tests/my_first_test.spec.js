const{test, expect} = require('@playwright/test')

test('My first test ', async ({page}) => {
    await page.goto('https://www.google.ru')
    await expect(page).toHaveTitle('Google')
})
