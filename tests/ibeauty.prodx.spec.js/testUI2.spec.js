import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://n.dev-beauty.ru/');
  await page.getByRole('button', { name: 'Да, верно' }).click();
  await page.getByRole('link', { name: 'Бренды', exact: true }).click();
  await page.pause()
  await page.getByLabel('Babor').click();
  await page.pause()
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot/screenshot3.png', fullPage: true });
  //check element present or not
  await expect (page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')).toHaveCount(1)
  if(await page.$('//a[contains(@class, "btn-md btn-weight-400 btn-d")]')) {
    await page.locator('//a[contains(@class, "btn-md btn-weight-400 btn-d")]').click();
  }//если на странице представлен один - кнопка Вперед элемент то кликни на него
  await page.pause()
  await page.screenshot({ path: 'screenshot/screenshot4.png', fullPage: true });
  await page.pause()
    await page.getByRole('link', { name: 'Вперед' }).click();
    await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot/screenshot6.png', fullPage: true });
 
  await page.getByRole('link', { name: 'Вперед' }).click();
  await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshot/screenshot7.png', fullPage: true });
    await page.locator('//a[@class="link link-lg"][7]').click()//await page.getByRole('banner').getByRole('link', { name: 'Бренды' })
  await page.getByLabel('Batiste').click();
  await page.pause()
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot/screenshot5.png', fullPage: true });

  await page.goto('https://n.dev-beauty.ru/');
  //await page.getByRole('button', { name: 'Да, верно' }).click();
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

 
