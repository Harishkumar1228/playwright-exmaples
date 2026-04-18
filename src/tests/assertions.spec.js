import {test,expect} from '@playwright/test';

test('assertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

//1. toBeEnabled, toBeEditable, - search field, entry field, text box

    const enabledText =await page.locator('#small-searchterms');
     await expect(enabledText).toBeEnabled();
     await expect(enabledText).toBeEditable();

//2. toBeChecked - radio button, check box

    const checkBox=await page.locator('#gender-male');
    await checkBox.click();
     await expect(checkBox).toBeChecked();

    const radioButton=await page.locator('#NewsLetterSubscriptions_0__IsActive');
    await expect(radioButton).toBeChecked();

//3.      
})