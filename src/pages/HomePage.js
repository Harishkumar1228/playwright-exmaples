exports.HomePage=
class HomePage{
    constructor(page){
        this.page=page;
        this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCart='//a[normalize-space()="Add to cart"]';
        this.cart='#cartur';

    }

    async addPorductToCart(productName){
        //list out all the products available on page, $$ when u want all the elements in form of array use $$
        const productList=await this.page.$$(this.productList);
        //Read each and every product
        for(const product of productList){
            if(productName == await product.textContent()){
                await product.click();
                break;
            }
        }
        //handle pop-up message and confirm action
        await this.page.on('dialog',async dialog=>{
            if (dialog.message().includes("Product added")){
                await dialog.accept();
            }
        } )
        await this.page.locator(this.addToCart).click();
    }
    async gotoCart(){
        await this.page.locator(this.cart).click();
    }
}