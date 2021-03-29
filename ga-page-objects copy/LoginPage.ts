class LoginPage {

    private loginUsername = '//*[@id="loginForm"]/div[1]/input'    
    private loginUPassword = '//*[@id="loginForm"]/div[2]/input'    
    private loginButton = '//button[contains(text(),"Login")]'


    getLoginUserName(){
        return cy.xpath(this.loginUsername).should('be.visible').type(Cypress.env('username'))
    }

    getLoginUserPassword(){
        return cy.xpath(this.loginUPassword).should('be.visible').type(Cypress.env('password'))
    }

    getLoginButton() {
        return cy.xpath(this.loginButton).click()
    }

    userLogin(){
        this.getLoginUserName()
        this.getLoginUserPassword()
        this.getLoginButton()
    }
}
export default new LoginPage();
