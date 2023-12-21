// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
import {test, expect} from '@playwright/test'
    test ('Test auth1', async ({page}) => {
//   const context = await browser.newContext();
    await page.goto('https://shampuriko.ru/')
    await page.pause(200)
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('9961048055');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('2568634');
  await page.getByRole('button', { name: 'Войти' }).click();
   await page.locator('#bx_1970176138_395_f5e07bd0ab70548a3db9e6f096af74cd_buy_link').click()
//   await page.locator('#bx_1970176138_395_f5e07bd0ab70548a3db9e6f096af74cd_buy_link').click();
//   await page.locator('#bx_1970176138_396_0564dce275e0399e557aae3bf75c32cd_buy_link').click();
  await page.locator('#bx_1970176138_396_0564dce275e0399e557aae3bf75c32cd_buy_link').click();
  await page.locator('#bx_1970176138_396_0564dce275e0399e557aae3bf75c32cd_quant_up').click();
  await page.locator('#bx_basketFKauiI > a.btn-null.header-white-btn.header-cart-btn').click();
  await page.getByRole('button', { name: 'Оформить заказ' }).click();
  await page.getByLabel('Имя').click();
  await page.getByLabel('Имя').fill('Тест');
  await page.locator('input[name="ORDER_PROP_3"]').click();
  await page.locator('input[name="ORDER_PROP_3"]').fill('9961048055');
  await page.getByRole('button', { name: 'Оформить заказ' }).click();
  await page.getByRole('button', { name: 'Продолжить' }).click();
  await page.goto('https://shampuriko.ru/personal/order/make/?ORDER_ID=303281');
  await page.getByRole('button', { name: 'Ок' }).click();
  await expect(page).toHaveTitle('Заказ сформирован')
});
// await page.getByRole('link', { name: 'Войти' }).click();
// await page.getByPlaceholder('+7 (___) ___-____').click();
// await page.locator('input[name="password"]').click();
// await page.locator('input[name="password"]').fill('2568634');
// await page.getByRole('button', { name: 'Войти' }).click();
// await page.locator('#shashlyki').getByRole('link', { name: 'В корзину' }).first().click();
// await page.locator('#bx_1970176138_400_605ae849ac68128df0a46f5abc043bfc_buy_link').click();
// await page.locator('#bx_1970176138_399_db34d7d4e85a56006846d0ed8865411f_basket_actions').getByRole('link', { name: 'В корзину' }).click();
// await page.getByRole('link', { name: '₽ 8' }).click();
// await page.getByRole('button', { name: 'Оформить заказ' }).click();
// await page.getByLabel('Имя').click();
// await page.getByLabel('Имя').fill('ТЕСТ');
// await page.getByPlaceholder('+7 (___)___-__-__').click();
// await page.getByRole('button', { name: 'Оформить заказ' }).click();
// await page.getByRole('button', { name: 'Продолжить' }).click();
// await page.getByRole('button', { name: 'Ок' }).click();