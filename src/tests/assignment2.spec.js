import{test,expect} from '@playwright/test';

test('login', async({page})=>{
   // login[username, password]
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //verify dashboard
     expect(page).toHaveTitle('Swag Labs');

})