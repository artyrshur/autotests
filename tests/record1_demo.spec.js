import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.goto('https://grinfer.com/');
  await page.getByText('All categories').click();
  await page.locator('#page-root li').filter({ hasText: 'Music' }).click();
  await page.locator('#page-root li').filter({ hasText: 'Fine Art' }).click();
  await page.locator('#page-root li').filter({ hasText: 'Photography' }).click();
  await page.locator('#page-root li').filter({ hasText: 'Technology' }).click();
  await page.getByRole('link', { name: 'Show more' }).click();
  await page.getByRole('button', { name: 'Design' }).click();
  await page.getByRole('button', { name: 'Courses' }).click();
  await page.locator('a').filter({ hasText: 'Learn Cinema 4D: Low Poly Wolf' }).click();
  await page.getByRole('link', { name: 'Try for free' }).click();
  await expect(page).toHaveTitle('Grinfer.com: Turn your knowledge into profit.')
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});