/*Dropdown
     --> In playwright we have diff type to handle Dropdown
         a. label
         b. visible text
         c. value  
         d. index               */

import{test,expect} from '@playwright/test'

test('dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
//label
   await page.locator('#country').selectOption({label:'India'});

   await page.waitForTimeout(2000);
//visible text
    await page.locator('#country').selectOption('China');

//value
   await page.locator('#country').selectOption({value:'australia'});
//index
   await page.locator('#country').selectOption({index:3})   

await page.waitForTimeout(2000);
})