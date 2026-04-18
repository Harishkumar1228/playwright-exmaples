import {test,expect} from '@playwright/test';


test('fileUplaod',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload');

   const filePath = 'C:\\Users\\Hxtreme\\Downloads\\Day11 Runbook11.docx';
    
    //function to upload file on the web element -'setInputFiles'
   await page.setInputFiles('#file-upload',filePath)

   await page.locator('#file-submit').click();

   // function to read the file status text , text is present inside the element

  const fileText =await page.locator('.example div').textContent();
  const fileTextInnerText = await page.locator('.example div').innerText();
  console.log(`text of element ${fileText} and ${fileTextInnerText}`);
  
})