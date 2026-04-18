import {test, expect} from '@playwright/test';
import { log } from 'node:console';
// what is page - window/tab in playwright
//page as object

test('myfirstscript', async({page})=>{
    await page.goto('https://www.saucedemo.com') // this command navigate to URL

   const pageTitle = await page.title(); // method return page title
       console.log("Page title is " + pageTitle)

   const pageUrl = page.url();
      console.log("Page URL is " + pageUrl);
      
      await expect(page).toHaveTitle("Swag Labs");
      await expect(page).toHaveURL("https://www.saucedemo.com");

      await page.close();
})