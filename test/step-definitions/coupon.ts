import { Given, When, Then } from '@wdio/cucumber-framework';
import dotenv from 'dotenv';
dotenv.config();

import LoginPage from '../pageobjects/propshoptrader/login.page.ts';
import LandingPage from '../pageobjects/propshoptrader/landing.page.ts';
import DashboardPage from '../pageobjects/propshoptrader/dashboard.page.ts';
import MarketplacePage from '../pageobjects/propshoptrader/marketplace.page.ts';
import ProductPage from '../pageobjects/propshoptrader/product.page.ts';
import CartPreviewPage from '../pageobjects/propshoptrader/cartPreview.page.ts';
import CartPage from '../pageobjects/propshoptrader/cart.page.ts';

const pages = {
    login: LoginPage,
    landing: LandingPage,
    dashboard: DashboardPage,
    marketplace: MarketplacePage,
    product: ProductPage,
    cartPreview: CartPreviewPage,
    cart: CartPage
}

type PageName = keyof typeof pages;

Given(`the user login using valid credentials`, async () => {
    await pages.landing.open();
    await pages.landing.navigateLoginPage();
    await pages.login.enterCredentials(process.env.USERNAME, process.env.PASSWORD);
});

When(`the user adds {string} to the cart`, async (product: string) => {
    await pages.dashboard.navigateMarketplace();
    await pages.marketplace.searchProduct(product);
    await pages.marketplace.inspectProduct(product);
    await pages.product.addProductToCart();
});

When(`the user applies coupon {string} during the checkout process`, async (coupon: string) => {
    await pages.cartPreview.navigateToCart();
    await pages.cart.applyCoupon(coupon);
});

Then(`I should see {string} on the total`, async (expectedOutcome: string) => {
    if(expectedOutcome === 'coupon rejected') {
        expect(pages.cart.errorMessageCouponCode).toBeDisplayed();
    }
});