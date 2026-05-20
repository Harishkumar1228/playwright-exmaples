exports.SwagHome=
class Homepage{
    constructor(page){
        this.page=page;
        this.productList="#inventory_container"
        this.addcart="//button[text()='Add to cart']"
        this.cart="#shopping_cart_container"
        this.checkout="#checkout"
        this.firstName="#first-name"
        this.lastName="#last-name"
        this.postalCode="#postal-code"
        this.continue="#continue"
        this.finish="#finish"
        this.successMessage="//h2[text()='Thank you for your order!']"
    }
    async addProduct(productName){
//list out all the products available on page, $$ when u want all the elements in form of array use $$
      const productList = await this.page.$$(this.productList)
        //Read each and every product
        for (const product of productList){
            if (productName == await product.textContent()){
                await product.click();
                break;
            }   
        }
    }
    async goCart(firstName, lastName, postalCode){
        await this.page.click(this.addcart);
        await this.page.click(this.cart);
        await this.page.click(this.checkout);
        await this.page.fill(this.firstName, firstName);
        await this.page.fill(this.lastName, lastName);
        await this.page.fill(this.postalCode, postalCode);
        await this.page.click(this.continue);
        await this.page.click(this.finish);
        

    }

    }
      

