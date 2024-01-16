import { test, expect, BrowserContext } from '@playwright/test';

/*

@TODO
1. Все страницы
2. На видео накладывать маску на главной странице
3. возможность указание домена аргументом

*/
const sizes = [
    [1920,1080],
    //[1024,1080],
    [767,1080],
    [360,640]
];

const domain = 'https://dev2-kars.nlmk.com';

const urls = [
    domain + '/vacancy/',
    domain + '/start_career/',
    domain + '/culture/',
    domain + '/favourites/',
    domain + '/hiring/',
    domain + '/aspirant/',
    domain + '/media/',
    domain + '/confidentiality/',
    domain + '/early_career/',
    domain + '/schoolchildren/',
    domain + '/students/',
    domain + '/about/',
    domain + '/faq/',
    domain + '/personal/',
    domain + '/auth/password-recovery.php?forgot_password=yes',
    domain + '/media/stati/kak-inzheneru-sostavit-rezyume-chtoby-priglasili-na-sobesedovanie/',
    
];

test.describe('Скриншоты страниц', () => {
    let context;

    test.beforeAll(async ({ browser }, ) => {
        context = await browser.newContext({
        
        });
        const page = await context.newPage();
        await page.goto(domain + '/favourites/');
        if(await page.locator('.cookies__btn-allow').isVisible()){
            await page.locator('.cookies__btn-allow').click({force: true});
        }
        if(await page.locator('.location-confirm__btn-confirm').isVisible()){
            await page.locator(".location-confirm__btn-confirm").click({force: true})
        }
    });

    for(const size of sizes){
        test('главная-' + size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain);
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await screenIt(page, workerInfo.title, 0, true, [page.locator('.create-future__img-video'), page.locator('.company-slider_horizontal')]);
        });
    }

    for(const size of sizes){
        test('вакансия-' + size[0], async ({}, workerInfo) => { //Отдельный тест, так как страница прыгает после загрузки, добавил задержку
            const page = await context.newPage();
            await page.goto(domain + '/vacancy/detail/rukovoditel-napravleniya-razvitiya-informatsionnykh-servisov-79237018/');
            await page.waitForTimeout(1500);
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await screenIt(page, workerInfo.title, 0, true, [page.locator('.form-label img')]);
        });
    }


    for (const url of urls) {
        
        for(const size of sizes){
            let url_without_domain = new URL(url);
            test(url_without_domain.pathname + '-' + size[0], async ({}, workerInfo) => {
                const page = await context.newPage();
                await page.goto(url);
                await page.setViewportSize({ width: size[0] , height: size[1] });
                //await page.getByRole('button', { name: 'Разрешить все Cookie' }).click({force: true});
                await screenIt(page, url_without_domain.pathname + '-' + size[0], 0, true, [page.locator('.captcha img')]);
            });
        }
        
    }  

});

test.describe('Скриншоты элементов', () => {
    let context= BrowserContext;

    test.beforeAll(async ({ browser }, ) => {
        context = await browser.newContext({
        
        });
        const page = await context.newPage();
        await page.goto(domain + '/favourites/');
        if(await page.locator('.cookies__btn-allow').isVisible()){
            await page.locator('.cookies__btn-allow').click({force: true});
        }
        if(await page.locator('.location-confirm__btn-confirm').isVisible()){
            await page.locator(".location-confirm__btn-confirm").click({force: true})
        }
    });

        
    for(const size of sizes){
        test('Элемент: выбор города-'+size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain + '/favourites/');
            page.waitForTimeout(1500);
            await page.locator('#location-text-city').click();
            await page.locator('#location-text-city').click(); //Костыль, почему-то не видно с первого раза
            await page.locator('.location-confirm__change').first().click();
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await screenIt(page, workerInfo.title, 500, false);
        });
    }
    

   
    for(const size of sizes){
        test('Элемент: авторизация-'+size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain + '/favourites/');
            await page.locator('.menu__login >> visible=true').click();
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await screenIt(page, workerInfo.title, 500, false);
        });
    }

    test('Элемент: регистрация', async ({}, workerInfo) => {
        const page = await context.newPage();
        await page.goto(domain + '/favourites/');
        await page.locator('.featured-vacancies__btn-register >> visible=true').click();
        await screenIt(page, workerInfo.title, 500, false, [page.locator('.captcha-img')]);
    });
    test('Элемент: меню-' + sizes[2][0], async ({}, workerInfo) => {
        const page = await context.newPage();
        await page.setViewportSize({ width: sizes[2][0] , height: sizes[2][1] });
        await page.goto(domain + '/favourites/');
        await page.locator('.menu__icon >> visible=true').click();
        await screenIt(page, workerInfo.title, 500, false);
    });
    test('Элемент: меню-' + sizes[1][0], async ({}, workerInfo) => {
        const page = await context.newPage();
        await page.setViewportSize({ width: sizes[1][0] , height: sizes[1][1] });
        await page.goto(domain + '/favourites/');
        await page.locator('.menu__icon >> visible=true').click();
        await screenIt(page, workerInfo.title, 500, false);
    });

    for(const size of sizes){
        test('Элемент: поиск-'+size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain + '/favourites/');
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await page.locator('.menu__search-icon >> visible=true').first().click();
            //page.getByPlaceholder('Введите запрос').fill('тест');
           // const responsePromise = page.waitForResponse(domain + '/bitrix/services/main/ajax.php?mode=class&c=nlmk%3Asearch&action=query');
            await screenIt(page, workerInfo.title, 500, false);
            //const response = await responsePromise;
        });
    }

    for(const size of sizes){
        test('Элемент: фильтр-'+size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain + '/vacancy/');
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await page.locator('.search__btn-filter >> visible=true').first().click();
            await screenIt(page, workerInfo.title, 500, false);
        });
    }
});

test.describe('Страницы + взаимодействие', () => {
    let context= BrowserContext;

    test.beforeAll(async ({ browser }, ) => {
        context = await browser.newContext({
        
        });
        const page = await context.newPage();
        await page.goto(domain + '/favourites/');
        if(await page.locator('.cookies__btn-allow').isVisible()){
            await page.locator('.cookies__btn-allow').click({force: true});
        }
        if(await page.locator('.location-confirm__btn-confirm').isVisible()){
            await page.locator(".location-confirm__btn-confirm").click({force: true})
        }
    });

    for(const size of sizes){
        test('Взаимодействие: избранное-'+size[0], async ({}, workerInfo) => {
            const page = await context.newPage();
            await page.goto(domain + '/vacancy/');
            await page.setViewportSize({ width: size[0] , height: size[1] });
            await page.locator('.btn-favorite >> visible=true').first().click();
            await page.waitForLoadState('networkidle'); //ожидание, что аякс запрос пройдет
            await page.goto(domain + '/favourites/');
            await screenIt(page, workerInfo.title, 500, true);
        });
    }

        
})

/**
 * 
 * @param page адрес страницы
 * @param title название страницы
 * @param projectName название проекта
 * @param datetime время
 * @param delay задержка, если надо подождать рендеринг
 * @param fullPage полную страницу или экран 
 * @param {array} mask  массив с масками
 */
async function screenIt(page, title, delay = 0, fullPage = true){ //mask:any = []
    if(delay) await page.waitForTimeout(delay);
    await expect(page).toHaveScreenshot(title + '.png', {mask : mask, fullPage: fullPage }); 
}