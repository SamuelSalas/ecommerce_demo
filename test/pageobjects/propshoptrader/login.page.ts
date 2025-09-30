import Page from '../page.ts';

class LoginPage extends Page {
    private get inputUsername(): ChainablePromiseElement {
        return $('#username');
    }

    private get inputPassword(): ChainablePromiseElement {
        return $('#password');
    }

    private get btnSubmit(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    public async enterCredentials(username: string, password: string): Promise<void> {
        try {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        } catch (error) {}
    }
}

export default new LoginPage();
