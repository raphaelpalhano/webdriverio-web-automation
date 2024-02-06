import accountPage from "../pages/account.page.ts";
import loginPage from "../pages/login.page.ts";

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.login('valid');
        await expect(accountPage.accountTitle).toBeExisting();
        await expect(accountPage.accountTitle).toHaveText('Conta');
    })
})

