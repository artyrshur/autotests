import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://n.dev-beauty.ru/');
  await page.getByRole('button', { name: 'Да, верно' }).click();
  await page.getByRole('link', { name: 'Бренды', exact: true }).click();
  await page.pause()
  await page.locator('//a[@aria-label="A-Derma"]').click()
  await page.pause()
  await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
  //check element present or not
  await expect (page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')).toHaveCount(1)
  if(await page.$('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')) {
    await page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]').click();
  }//если на странице представлен один - кнопка Вперед элемент то кликни на него
  await page.pause()
  await page.screenshot({ path: 'screenshot/screenshot1.png', fullPage: true });
  await expect(page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')).toBeEnabled
  if(await page.$('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')) {
    await page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]').click(); 
  }
  await page.getByRole('banner').getByRole('link', { name: 'Бренды' }).click()
  await page.getByLabel('Afnan').click();
  await page.pause()
  await page.waitForLoadState
  await page.screenshot({ path: 'screenshot/screenshot2.png', fullPage: true })});
//   await expect(page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')).toBeVisible
//   if(await page.$('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')) {
//     await page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]').click(); 
//     await page.getByRole('banner').getByRole('link', { name: 'Бренды' }).click()
//     await page.getByLabel('Afnan').click();
//     await page.pause()
//     await page.screenshot({ path: 'screenshot/screenshot2.png', fullPage: true });
//     await page.pause()
//     await page.getByRole('banner').getByRole('link', { name: 'Бренды' }).click()
//   await page.getByLabel('Babor').click();
//   await page.pause()
//   await page.screenshot({ path: 'screenshot/screenshot3.png', fullPage: true });
//     await expect(page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')).toBeEnabled
//     if(await page.$('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')) {
//       await page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]').click(); 
//       await page.pause()
//   await page.screenshot({ path: 'screenshot/screenshot4.png', fullPage: true });
//   await expect(page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')).toBeEnabled
//     if(await page.$('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]')) {
//       await page.locator('//a[@class="btn btn-primary btn-md btn-weight-400 btn-dark"]').click(); 
//       await page.pause()
//   await page.screenshot({ path: 'screenshot/screenshot5.png', fullPage: true });
// }}}});
