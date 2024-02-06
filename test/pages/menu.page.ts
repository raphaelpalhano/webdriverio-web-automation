import Page from "./page";

class Menu extends Page {

    public get buttonLogin() {
        return $('header > div > a[href="/account/login"]');  
    } 

    public async goToLogin() {
       await this.buttonLogin.click();
    }
}


export default new Menu;

// //div//a/descendant::span[contains(text(), "Fazer login")]