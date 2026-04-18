import {test, expect} from '@playwright/test';
import { log } from 'node:console';



test('locators',async({page})=>{

   await page.goto('https://www.saucedemo.com')

   const pageTitle = await page.title();
   console.log("page title is " + pageTitle);

   const pageUrl = page.url();
   console.log("page URL" + pageUrl);

   //to type data in textfield use fill function

   await page.locator('id=user-name').fill("standard_user");
   await page.locator('id=password').fill("secret_sauce");
              
   //click on login element by locators

   await page.locator('id=login-button').click();
   
})