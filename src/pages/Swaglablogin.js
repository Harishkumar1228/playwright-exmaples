exports.Swaglablogin=
class Swaglablogin{
    constructor(page){
        this.page=page;
        this.username="#user-name";
        this.password="#password";
        this.loginbtn="#login-button";
    }
    async gotologinpage(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async login(){
        await this.page.locator(this.username).fill("standard_user");
        await this.page.locator(this.password).fill("secret_sauce");
        await this.page.locator(this.loginbtn).click();
    }
}