
import {test,expect} from '@playwright/test';

test('google search amazon', async ({page}) => {
    await page.goto('https://www.google.com/');

    await expect(page).toHaveTitle(/google/);

    await page.fill('textarea[name="q"]','amazon');
    await page.press('textarea[name="q"]','Enter');

    await page.waitForSelector('#search');

    await page.screenshot({path:"amzon.png"});
});
    


