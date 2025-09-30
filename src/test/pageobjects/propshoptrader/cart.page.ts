import Page from '../page.ts';

class CartPage extends Page {
    private get inputCouponCode(): ChainablePromiseElement {
        return $('#coupon_code');
    }

    private get btnApplyCoupon(): ChainablePromiseElement {
        return $('button=Apply coupon');
    }

    public get errorMessageCouponCode(): ChainablePromiseElement {
        return $('#coupon-error-notice');
    }

    public async applyCoupon(couponCode: string): Promise<void> {
        await this.inputCouponCode.setValue(couponCode);
        await this.btnApplyCoupon.click();
    }
}

export default new CartPage();
