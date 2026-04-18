exports.Signup=
class Signup{
    constructor(page){
        this.page=page;
        this.signupBtn='#signin2';
        this.addUser='#sign-username';
        this.addPassword='#sign-password';
        this.clickSignup='//button[text()="Sign up"]';
    }
    async signupPage(){
        await this.page.goto('https://www.demoblaze.com/');
    }
    async signupFlow(user,pass){
        await this.page.locator(this.signupBtn).click();
        await this.page.locator(this.addUser).fill(user);
        await this.page.locator(this.addPassword).fill(pass);
        await this.page.locator(this.clickSignup).click();
    }
}