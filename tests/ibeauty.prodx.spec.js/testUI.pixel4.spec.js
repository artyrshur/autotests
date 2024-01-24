import { test, expect, devices, BrowserContext } from '@playwright/test';

test.use({
  ...devices['Pixel 4'],
})

test('test', async ({ page }) => {
await page.goto('https://n.dev-beauty.ru/catalog/crystal-bright-nabor-nabor-dlya-siyayushcheykozhi-litsa-loson-dlya-kozhi-litsa-50ml-syv-ka-dlya-kozhi-litsa-10ml-krem-dlya-kozhi-litsa-20ml750021rx/')
await page.pause()
await page.getByRole('button', { name: 'Да, верно', exact: true }).click();
await page.pause()
await page.screenshot({  path: 'screenshot/screenshotpixel4.png', fullPage: true });
//список меню выпадашка в мобилке
await page.locator('//button[@class="btn btn-md btn-weight-400 btn-only-icon d-xl-none js-mobile-menu-toggle"][1]').click()
await page.getByRole('link', { name: 'Бренды', exact: true }).click();
await page.pause()
await page.getByLabel('Carenology95').click()
await page.locator("#bx_1549814020_1209665 button").filter({ hasText: "В корзину" }).click()
await page.locator("#bx_3311999166_1209671 button").filter({ hasText: "В корзину" }).click()
await page.screenshot({  path: 'screenshot/tovarvkorzine.png', fullPage: true });
await page.locator('id=bx_basketRQfGuf').click()
await page.screenshot({  path: 'screenshot/basket.png', fullPage: true });
await page.locator('//img[@alt="iBeauty"])[1]')
await page.locator('//button[@class="btn btn-md btn-weight-400 btn-only-icon d-xl-none js-mobile-menu-toggle"][1]').click()
await page.locator('linkText=Парфюм').click
await page.waitForLoadState
await page.locator('//button[@class="filters-head__button"]')
await page.locator('//button[contains(text(),"Стоимость")]').click()
// await expect(page.locator('id=range1-price')).toBeEnabled
// if(await page.$('id=range1-price')) {
// await page.locator('id=range1-price').click();
});
