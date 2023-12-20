// @ts-check
const { test, expect } = require('@playwright/test');

test('New test grinfer', async ({ page }) => {
  await page.goto('https://grinfer.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TopOnlineCourses | Grinfer/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
