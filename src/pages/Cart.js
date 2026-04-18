exports.Cart=
class Cart{
    constructor(page){
    this.page=page;
    this.cartList='//tbody[@id="tbodyid"]/tr/td[2]';
}

 async checkProductList(productName){
    const productsInCart = await this.page.$$(this.cartList);
    for(const product of productsInCart){
        if(productName == await product.textContent() ){
            return true;
            break;
        }
    }
 }
}