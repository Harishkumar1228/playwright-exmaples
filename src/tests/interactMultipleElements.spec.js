import {test,expect} from '@playwright/test';

test('GetNoofLinks',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/');
    console.log("Page loaded succesfully");

    //get the total no pf links present
 
   const links= page.locator('#content a');
        const noOfLinks= await links.count();

        console.log(`total number of ${noOfLinks} links`);
        
} )
