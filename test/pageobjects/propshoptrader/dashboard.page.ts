import Page from '../page.ts';

class DashboardPage extends Page {
    private get btnVisitMarketplace(): ChainablePromiseElement {
        return $('=Visit Marketplace');
    }

    public async navigateMarketplace(): Promise<void> {
        await super.iconXBottonBanner.click();
        await this.btnVisitMarketplace.scrollIntoView();
        await this.btnVisitMarketplace.click();
    }
}

export default new DashboardPage();
