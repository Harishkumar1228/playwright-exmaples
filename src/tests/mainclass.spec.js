import{test,expect} from "@playwright/test"
import { Swaglablogin } from "../pages/Swaglablogin"
import { SwagHome} from "../pages/SwagHome"

test('test',async({page})=>{
//Login
const loginSwag = new Swaglablogin(page);
await loginSwag.gotologinpage();
await loginSwag.login();
await page.waitForTimeout(3000);

//Home
const homeSwag = new SwagHome(page);
await homeSwag.addProduct("Sauce Labs Backpack");
await homeSwag.goCart("Harish","Ram","560066");
await page.waitForTimeout(3000);

await expect(page.locator(homeSwag.successMessage))
   .toHaveText("Thank you for your order!");
})
 

