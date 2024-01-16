import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
    
  // Открываем страницу категории парфюмерии
  await page.goto('https://n.dev-beauty.ru/catalog/parfyumeriya/');
  await page.getByRole('button', { name: 'Да, верно' }).click();

  // Делаем скриншот первой страницы
  await page.screenshot({ path: 'screenshot_page1.png', fullPage: true });

  // Находим и кликаем на элемент, представляющий переход на вторую страницу
  await page.getByRole('link', { name: 'Вперед' }).click();

  // Ожидание загрузки второй страницы (может потребоваться на вашем сайте)
  // await page.waitForLoadState('load');

  // Делаем скриншот второй страницы
  await page.screenshot({ path: 'screenshot_page2.png', fullPage: true });


});
