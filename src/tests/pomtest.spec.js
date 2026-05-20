// main test where we call page object models as sep file
import{test,expect} from '@playwright/test';
import{ HomePage } from '../pages/HomePage';
import{ LoginPage } from '../pages/LoginPage';
import{ Cart } from '../pages/Cart';
import { Signup } from '../pages/Signup';
//import { LaptopCart } from '../pages/LaptopCart';

test('test',async({page})=>{

//Signup
   const signup= new Signup(page);
   await  signup.signupPage();
   await signup.signupFlow('Harish','Harish@28');
   await page.waitForTimeout(3000);    

//Login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('harishram2829@gmail.com', 'Harish@28');
    await page.waitForTimeout(3000);

//Homepage
   const home =new HomePage(page); 
   await home.addPorductToCart("Samsung galaxy s6");
   await home.gotoCart();
   await page.waitForTimeout(3000);

 //Cart  
   const cart=new Cart(page);
   const status= await cart.checkProductList("Samsung galaxy s6");
   expect(await status).toBe(true);
   await page.waitForTimeout(3000);
// //Laptop
   const laptop= new LaptopCart(page);
   await laptop.selectLaptops();
   await laptop.addProduct("Sony vaio i5");
   await laptop.checkProduct("Sony vaio i5");
   expect(await status).toBe(true);
   await page.waitForTimeout(3000);
})
    