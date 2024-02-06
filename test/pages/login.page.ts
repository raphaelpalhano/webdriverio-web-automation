import { readerJson } from "../helpers/json.helper";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('form > div > input[name="customer[email]"]');
    }

    public get inputPassword () {
        return $('input[id="CustomerPassword"]');
    }

    public get btnSubmit () {
        return $('form[id="customer_login"] > button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (condition: string) {
        const user = readerJson('login')[condition];
        await this.inputUsername.setValue(user.username);
        await this.inputPassword.setValue(user.password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async goToLogin () {
        await super.open('/account/login');
    }
}

export default new LoginPage();
