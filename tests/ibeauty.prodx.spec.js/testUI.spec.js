import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
await page.goto('https://n.dev-beauty.ru/catalog/perfume-unisex-parfyumernaya-voda-02-60-mlunisex02/')
await page.pause()
await page.getByRole('button', { name: 'Да, верно' }).click();
await page.pause()
await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
});