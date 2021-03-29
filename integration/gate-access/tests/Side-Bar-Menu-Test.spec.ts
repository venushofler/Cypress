
import { expect, assert, should } from 'chai';
import LoginPage from '../../../ga-page-objects/LoginPage'
import SideBarMenu from '../../../ga-page-objects/SideBarMenu'

    describe('Test Left Navigation Bar', () => {

        before(()=> {
            cy.visit('/');
        })

        afterEach(() => {
            Cypress.Cookies.preserveOnce('connect.sid'); 
        })
        
        it('user can login to gate access', () => {          
            LoginPage.userLogin();
        })

        it('user can verify side bar elements', () => {
            SideBarMenu.verifySideBarElements()
        })

        it('user can click all side bar categories', () => {
            SideBarMenu.clickAllSideBarCategories()
        })

        after(() => {
            cy.clearCookies()
        })

    })





