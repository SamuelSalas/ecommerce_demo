import { $ } from '@wdio/globals'
import Page from './page.ts';

class LoginPage extends Page {
    public get inputUsername () {
        return $('');
    }

    public get inputPassword () {
        return $('');
    }

    public get btnSubmit () {
        return $('');
    }
}

export default new LoginPage();
