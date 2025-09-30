import { Key } from 'webdriverio'
import Page from '../page.ts';

class MakerplacePage extends Page {
    private get inputSearch(): ChainablePromiseElement {
        return $('input[type="search"]');
    }

    public async searchProduct(product: string): Promise<void> {
        await super.iconXBottonBanner.click();
        await this.inputSearch.setValue(product);
        await browser.keys(Key.Enter);
    }

    public async inspectProduct(product: string): Promise<void> {
        await browser.$(`.woocommerce-loop-product__title=${product}`).click();
    }
}

export default new MakerplacePage();
