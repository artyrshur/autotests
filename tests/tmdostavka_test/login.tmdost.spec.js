import {test, expect} from '@playwright/test'

test ('Demo test', async({page}) => {
    await page.goto('https://newtmdostavka.leadget.ru/')
    await page.pause()
    await page.getByRole('button', { name: 'Понятно' }).click()
    await page.locator('a.header_profile').click()
    await page.locator('input[type=phone]').click()
    await page.pause()
    await page.locator('input[type=phone]').fill('9961048055')
    await page.pause()
    await page.locator('input[type=password]').fill('123456')
    //await page.pause()
    await page.getByRole('button', { name: 'Войти' }).click();
    await page.pause()
    await expect (page).toHaveTitle('Личные данные')
    await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
    await page.getByRole('link', { name: 'Вернуться на главную' }).click();
    await page.getByRole('link', { name: 'Доставка от 1 часа' }).first().click();
    await page.pause();
    await page.getByRole('button', { name: 'Курьер' }).click();
    await page.getByPlaceholder('Напишите адрес доставки').click()
    await page.getByPlaceholder('Напишите адрес доставки').fill('луначарского 23')
    await page.pause();
    await page.getByText('г Екатеринбург, ул Луначарского, д').click()
    
});