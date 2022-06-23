/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
require("cypress-xpath")

context('Check if elements exists', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200")
        cy.contains('Epic road trip').should('exist')
    })

    it('Login Modal - Open', () => {
        // Check connexion Modal elements
        cy.contains('Connexion').click()
        cy.contains("Nom d'utilisateur")
        cy.contains("Entrez votre mot de passe")
    })

    it('Register Modal - Open Register Modal', () => {
        // Check Register Modal elements
        cy.contains('Créer un compte').click()
        cy.contains("Inscription").should('have.class', 'mat-dialog-title')
        cy.contains("Nom d'utilisateur")
        cy.contains("Entrez votre mot de passe")
        cy.contains("Confirmez votre mot de passe")
    })

    it('Login Modal - Check disabled button empty', () => {
        // Check connexion Modal elements
        cy.contains('Connexion').click()
        cy.contains("Se connecter").should('be.disabled')
    })

    /*it('Login Modal - Check disabled button no username', () => {
        // Check connexion Modal elements
        cy.contains('Connexion').click()
        cy.xpath("//*[@data-test=\"login-password-input\"]").type("Password123.")
        cy.contains('Se connecter').should('be.disabled')
    })

    it('Login Modal - Check disabled button no password', () => {
        // Check connexion Modal elements
        cy.contains('Connexion').click()
        cy.xpath("//*[@data-test=\"login-username-input\"]").type("User123.")
        cy.contains('Se connecter').should('be.disabled')
    })

     */

    it('Register Modal - Check disabled button empty', () => {
        // Check connexion Modal elements
        cy.contains('Créer un compte').click()
        cy.xpath("//*[@id='mat-dialog-0']/app-register/mat-dialog-actions/button[2]").should('be.disabled')
    })

    it('Register Modal - Check disabled button no username', () => {
        // Check connexion Modal elements
        cy.contains('Créer un compte').click()
        cy.xpath("//*[@data-test=\"register-email-input\"]").type("user123@gmail.com")
        cy.xpath("//*[@data-test=\"register-password-input\"]").type("Password1234.")
        cy.xpath("//*[@data-test=\"register-confirmation-password-input\"]").type("Password1234.")
        cy.xpath("//*[@id='mat-dialog-0']/app-register/mat-dialog-actions/button[2]").should('be.disabled')
    })

    it('Register Modal - Check disabled button no password', () => {
        // Check connexion Modal elements
        cy.contains('Créer un compte').click()
        cy.xpath("//*[@data-test=\"register-username-input\"]").type("User123.")
        cy.xpath("//*[@data-test=\"register-email-input\"]").type("user123@gmail.com")
        cy.xpath("//*[@data-test=\"register-confirmation-password-input\"]").type("Password1234.")
        cy.xpath("//*[@id='mat-dialog-0']/app-register/mat-dialog-actions/button[2]").should('be.disabled')
    })

    it('Register Modal - No email', () => {
        // Check connexion Modal elements
        cy.contains('Créer un compte').click()
        cy.xpath("//*[@data-test=\"register-username-input\"]").type("User123")
        cy.xpath("//*[@data-test=\"register-password-input\"]").type("Password1234.")
        cy.xpath("//*[@data-test=\"register-confirmation-password-input\"]").type("Password1234.")
        cy.xpath("//*[@id='mat-dialog-0']/app-register/mat-dialog-actions/button[2]").should('be.disabled')
    })

    it('Register Modal - Different passwords', () => {
        // Check connexion Modal elements
        cy.contains('Créer un compte').click()
        cy.xpath("//*[@data-test=\"register-username-input\"]").type("User123.")
        cy.xpath("//*[@data-test=\"register-email-input\"]").type("user123@gmail.com")
        cy.xpath("//*[@data-test=\"register-email-input\"]").type("user123@gmail.com")
        cy.xpath("//*[@data-test=\"register-password-input\"]").type("Password1234.")
        cy.xpath("//*[@data-test=\"register-confirmation-password-input\"]").type("Password123.")
        cy.contains('Les mot de passes doivent être identique !').should('exist')
    })

})
