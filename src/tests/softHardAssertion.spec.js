import{test,expect} from '@playwright/test';
import { log } from 'node:console';

test('Hard',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
     console.log('A');
   await expect(page).toHaveTitle('PRODUCT STORE')
    console.log('B');
    console.log('C');
})

test.only('soft',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
     console.log('A');
   await expect.soft(page).toHaveTitle('PRODUCT STORE')
    console.log('B');
    console.log('C');
})