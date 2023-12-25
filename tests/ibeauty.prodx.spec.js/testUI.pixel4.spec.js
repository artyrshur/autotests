import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 4'],
});

test('test', async ({ page }) => {
await page.goto('https://n.dev-beauty.ru/catalog/crystal-bright-nabor-nabor-dlya-siyayushcheykozhi-litsa-loson-dlya-kozhi-litsa-50ml-syv-ka-dlya-kozhi-litsa-10ml-krem-dlya-kozhi-litsa-20ml750021rx/')
await page.pause()
await page.getByRole('button', { name: 'Да, верно' }).click();
await page.pause()
await page.screenshot({ path: '/screenshot/screenshotpixel4.png', fullPage: true });
});