import { test, expect} from '@playwright/test';

const sizes = [
    [1920,1080],
    //[1024,1080],
    [767,1080],
    [360,640]
];

const domain = 'https://n.dev-beauty.ru';

const urls = [
    domain + '/products-new/',
    domain + '/catalog/parfyumeriya/',
    domain + '/catalog/ukhod-za-kozhey/zhenskiy/ukhod-za-litsom/',
    domain + '/catalog/dekorativnaya-kosmetika/'
];

test.describe('Скриншоты страниц', () => {
    //let context;

    // test.beforeAll(async ({ browser }, ) => {
    //     context = await browser.newContext({
        
    //     }); 
    // const page = await context.newPage();
    test('test', async ({ page }) => {
    await page.goto(domain + '/catalog/parfyumeriya/');
    await page.setViewportSize({ width: size[0] , height: size[1] });
        await page.screenIt(page, workerInfo.title, 0, true)
        
})});

for(const size of sizes){
    test('главная-' + size[0], async ({page}, workerInfo) => {
        //const page = await context.newPage();
        await page.goto(domain);
        await page.setViewportSize({ width: size[0] , height: size[1] });
        await page.screenshot(page, workerInfo.title, 0, true)
        });
    }