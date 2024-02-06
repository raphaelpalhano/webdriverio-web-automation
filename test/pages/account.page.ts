import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get accountTitle () {
        return $('div > h1');
    }
}

export default new AccountPage();
