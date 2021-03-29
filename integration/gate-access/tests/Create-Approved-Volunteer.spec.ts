
import { expect, assert, should } from 'chai';
import LoginPage from '../../../ga-page-objects/LoginPage'
import ApplicantsModule from '../../../ga-page-objects/ApplicantsModule'

    describe('Create an applicant', () => {

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
            ApplicantsModule.createApplicant();
        })

        after(() => {
            cy.clearCookies()
        })

    })





