import Page from '../page.ts';

class CartPreviewPage extends Page {
    private get btnCart(): ChainablePromiseElement {
        return $('#fkcart-checkout-button');
    }

    public async navigateToCart(): Promise<void> {
        await this.btnCart.click();
    }
}

export default new CartPreviewPage();
