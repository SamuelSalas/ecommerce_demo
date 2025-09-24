import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts';

const pages = {
    login: LoginPage
}

type PageName = keyof typeof pages;

Given(`the user login using valid {string} and {string} credentials`, (username: string, password: string) => {
});

When(`the user adds {string} to the cart`, (product: string) => {
});

When(`the user applies coupon {string} during the checkout process`, (coupon: string) => {
});

Then(`I should see {string} on the total`, (expectedOutcome: string) => {
});