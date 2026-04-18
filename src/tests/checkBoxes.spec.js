import{test,expect} from '@playwright/test'

test('multiCheckbox', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.locator("//input[@value='sunday' and @type='checkbox']").check();
    page.locator("//input[@value='monday' and @type='checkbox']").check();
   
    page.locator()
})