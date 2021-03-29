
import { expect, assert, should } from 'chai';
import LoginPage from '../../../ga-page-objects/LoginPage'
import FacilityPage from '../../../ga-page-objects/FacilityPage'
import InmatesModule from '../../../ga-page-objects/InmatesModule'

    describe('Regional User Can Delete Doc In Facilities Module', () => {

        before(()=> {
            cy.visit('/');
        })

        afterEach(() => {
            Cypress.Cookies.preserveOnce('connect.sid'); 
        })
        
        it('user can login to gate access', () => {          
            LoginPage.userLogin();
        })

        it('user navigates to facilities module', () => {
            FacilityPage.navigateToFacilities();
        })

        it('user can upload file', () => {
            FacilityPage.addFileToFolder();
        })

        it('user can verify File Added To Facilities User', () => {
            FacilityPage.verifyFileAddedToFacilitiesUser();
        })

        it('user can delete file', () => {
            FacilityPage.deleteFile();
        })

        it('verify file deleted', () => {
            InmatesModule.verifyPDFDeleted();
        })

        after(() => {
            cy.clearCookies()
        })

    })





