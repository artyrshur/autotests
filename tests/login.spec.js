import {test, expect} from '@playwright/test'

test ('Test auth', async ({page}) => {
    await page.goto('https://shampuriko.ru/')
    await page.pause()
    await page.getByRole('link', { name: 'Войти' })
})