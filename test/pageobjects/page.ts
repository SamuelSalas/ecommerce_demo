export default class Page {
    protected get iconXBottonBanner(): ChainablePromiseElement {
        return $('div.wt_dismissable');
    }

    public open (path: string) {
        return browser.url(path);
    }
}
