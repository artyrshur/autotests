
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://n.dev-beauty.ru/');
  await page.getByRole('button', { name: 'Да, верно' }).click();
  await page.getByRole('link', { name: 'Бренды', exact: true }).click();
  await page.pause()
  await page.getByLabel('Alphascience').click();
  await page.screenshot({ path: 'screenshot/screenshot10.png', fullPage: true });
  await page.locator('body > header > div.d-none.d-xl-block.header-nav > div > nav > a:nth-child(7)').click();
  await page.pause()
  await page.getByLabel('Carmex').click();
  await page.pause()
  await page.screenshot({ path: 'screenshot/screenshot11.png', fullPage: true });
})
  // await expect (page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')).toBeEnabled()
  // if(await page.$('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')) {
  //   await page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]').click(); 
  //   await page.getByRole('banner').getByRole('link', { name: 'Бренды' }).click()
  //   await page.getByLabel('Hermes').click();
  //   await page.pause()
  //   await page.screenshot({ path: 'screenshot/screenshot9.png', fullPage: true });
  //   await page.pause()
  //   await expect(page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')).toBeVisible
  //   if(await page.$('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')) {
  //     await page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]').click(); 
  //     await page.screenshot({ path: 'screenshot/screenshot8.png', fullPage: true });
  //     await page.pause()
  // }}})