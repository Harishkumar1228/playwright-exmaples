import{test,expect} from '@playwright/test';

test('popup',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enable alert window
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click('#alertBtn');
})