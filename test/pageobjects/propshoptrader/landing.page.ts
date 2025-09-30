import Page from '../page.ts';

class LandingPage extends Page {
    private get iconXGladiatorsModal(): ChainablePromiseElement {
        return $('.depicter-symbol-container');
    }

    private get linkLogin(): ChainablePromiseElement {
        return $('.elementor-item=Login');
    }

    private get linkLogout(): ChainablePromiseElement {
        return $('//nav[@aria-label="Menu"]').$('#logout-nav');
    }

    public async navigateLoginPage(): Promise<void> {
        try {
            await this.iconXGladiatorsModal.click();
        } catch{
            await this.linkLogout.click();
        }
        await super.iconXBottonBanner.click();
        try {
            await this.linkLogin.click();
        } catch{
            await this.linkLogout.click();
            await this.linkLogin.click();
        }
    }

    public open(): Promise<void | WebdriverIO.Request> {
        return super.open('https://propshoptrader.com/');
    }
}

export default new LandingPage();
