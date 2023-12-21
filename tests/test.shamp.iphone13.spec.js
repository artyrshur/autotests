import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await page.goto('https://shampuriko.ru/');
  await page.pause()
  await page.getByRole('button', { name: 'Принять' }).click();
  await page.locator('#bx_1970176138_344_4ab978e8bec606ce72388dc8980b7e26_basket_actions').getByRole('link', { name: 'В корзину' }).click();
  await page.getByRole('button', { name: 'Самовывоз' }).click();
  await page.getByLabel('- - - - - - - -').locator('span').nth(1).click();
  await page.getByRole('option', { name: 'Вильгельма де Генина' }).click();
  await page.getByRole('button', { name: 'Выбрать' }).click();
  await page.locator('#bx_1970176138_344_4ab978e8bec606ce72388dc8980b7e26_basket_actions').getByRole('link', { name: 'В корзину' }).click();
  await page.locator('#bx_1970176138_395_f5e07bd0ab70548a3db9e6f096af74cd_buy_link').click();
  await page.locator('#bx_1970176138_396_0564dce275e0399e557aae3bf75c32cd_buy_link').click();
  await page.locator('#bx_1970176138_1242_e25276d42f9f12765bf154b9be365c24_buy_link').click();
  await page.locator('#shashlyki').getByRole('link', { name: 'В корзину' }).first().click();
  await page.getByRole('link', { name: 'Корзина' }).click();
  await page.getByRole('button', { name: 'Оформить заказ' }).click();
  await page.getByLabel('Имя').click();
  await page.getByLabel('Имя').fill('ТЕСТ');
  await page.getByPlaceholder('+7 (___)___-__-__').click();
  await page.getByPlaceholder('+7 (___)___-__-__').fill('9999999999')
  await page.getByLabel('Комментарии к заказу:').click();
  await page.getByLabel('Комментарии к заказу:').fill('ТЕСТ НЕ ГОТОВИТЬ!!!!!!!!!!!!!!!!!!!!!');
  await page.getByRole('button', { name: 'Оформить заказ' }).click();
  await page.getByRole('button', { name: 'Продолжить' }).click();
  //await page.goto('https://shampuriko.ru/personal/order/make/?ORDER_ID=303446');
  await page.getByRole('button', { name: 'Ок' }).click();
  await expect (page).toHaveTitle('Заказ сформирован')
  await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
});