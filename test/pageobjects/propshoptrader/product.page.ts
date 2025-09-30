import Page from '../page.ts';

class ProductPage extends Page {
    private get btnAddToCart(): ChainablePromiseElement {
        return $('button=Add to cart');
    }

    public async addProductToCart(): Promise<void> {
        await this.btnAddToCart.scrollIntoView();
        await this.btnAddToCart.click();
    }
}

export default new ProductPage();
