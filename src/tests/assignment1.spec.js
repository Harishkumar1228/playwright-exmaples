import{test,expect} from '@playwright/test';

test('website', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'test/screenshot'+Date.now()+'Home.png'});
})