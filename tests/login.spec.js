import { test, expect, devices, chromium } from '@playwright/test';

test.describe('Your Test Suite', () => {
  let browser, context;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
  });

  test('Test auth1', async () => {
    const names = [
    { name: 'Новинки', locator: '//a[@class="link link-lg mobile-menu__nav-link"][contains(text(),"Новинки")]' },
    { name: 'Парфюм', locator: 'getByRole("link", { name: "Парфюм", exact: true })' },];

    for (const name of names) {
      const mobilePage = await context.newPage();

      // Устанавливаем эмуляцию для мобильного устройства iPhone 14
      await mobilePage.setViewportSize({ width: 375, height: 812 }); // Размеры iPhone 14
      await mobilePage.goto('https://n.dev-beauty.ru/');
      await mobilePage.pause()
      //закрываем попап геолокации
      await mobilePage.getByRole('button', { name: 'Да, верно', exact: true }).click();
      //переходим в мобильное меню
      await mobilePage.locator('//button[@class="btn btn-md btn-weight-400 btn-only-icon d-xl-none js-mobile-menu-toggle"][1]').click()
      await mobilePage.pause()
      //выбираем каждую из категорий по циклу for
      //await mobilePage.click(`text=${name}`);
      const categoryButton = mobilePage.locator(eval(name.locator));

      // Ожидание загрузки контента (может потребоваться на вашем сайте)
       await mobilePage.waitForLoadState('load');

      // Создаем скриншот на весь экран
      await mobilePage.screenshot({ path: `screenshot_${name}_mobile.png`, fullPage: true });

      // Закрываем страницу
      await mobilePage.close();
    }

    // Создаем новую страницу для десктопа
    const desktopPage = await context.newPage();

    // Переходим на сайт и создаем скриншот на весь экран
    await desktopPage.goto('https://n.dev-beauty.ru/');
    await desktopPage.screenshot({ path: 'screenshot_desktop.png', fullPage: true });

    // Закрываем браузер
    await browser.close();
  });

  test.afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });
})
