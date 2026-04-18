exports.LaptopCart=
class LaptopCart{
    constructor(page){
        this.page=page;
        this.laptopModule='Laptops';
        this.selectLaptop='//*[@id="tbodyid"]';
        this.addCart='//a[@class="btn btn-success btn-lg"]';
        this.showCart='//a[text()="Cart"]';
        this.verifyCart='//*[@id="tbodyid"]';
    }
    async selectLaptops(){
    await this.page.getByRole('link', { name: this.laptopModule }).click();
}
    
    async addProduct(productName){
        const selectLaptop= await this.page.$$(this.selectLaptop);
        for(const product of selectLaptop){
            if(productName = await product.textContent()){
                await product.click();
                break;
            }
        }
    await this.page.on('dialog', async dialog=>{
        if(dialog.message().includes("Product added"));
        await dialog.accept();
    })
    await this.page.locator(this.addCart).click();
    await this.page.locator(this.showCart).click();
}
   async checkProduct(productsName){
    const verifyCart= await this.page.$$(this.verifyCart)
    for(const product of verifyCart){
      if(productsName= await product.textContent()){
        return true;
        break;
      }
    }

   }
}