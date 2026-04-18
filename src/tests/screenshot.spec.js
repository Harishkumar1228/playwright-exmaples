/* In PW there are multiple ways to take screenshot
  1. pageview 
  2. fullpage - top to bottom
  3.locator specific screenshot */




import{test,expect} from '@playwright/test';
// page view screenshot
test('screenshot', async({page})=>{
       await page.goto('https://www.demoblaze.com/');
       await page.screenshot({path:'test/screenshot'+Date.now()+'Home.png'});

})
// full page view screenshot
test('fullpage', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'test/screenshot/fullpage/'+Date.now()+'Home.png',fullPage:true});

})
//locator screenshot
test('locatorScreenshot', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.locator('.d-block img-fluid').first().screenshot({path:'test/screenshot/locator/'+Date.now()+'Home.png'})
})