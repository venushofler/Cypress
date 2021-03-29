import { times } from "cypress/types/lodash"

class SideBarMenu {

    private gateAccess = "//h4[contains(text(),'Gate Access')]"
    private navePhoto = "//img[@id='navPhoto']"
    private calendar = "//*[@id='sidebar']/ul/li[1]/a[contains(.,'Calendar')]"
    private meetings = "//*[@id='Meetings']/span"
    private facilities = "//*[@id='sidebar']/ul/li[3]/a[contains(.,'Facilities')]"
    private inmates = "//*[@id='sidebar']/ul/li[4]/a[contains(.,'Inmates')]"
    private correspondance = "//*[@id='sidebar']/ul/li[5]/a[contains(.,'Correspondence')]"
    private volunteers = "//*[@id='sidebar']/ul/li[6]/a[contains(.,'Volunteers')]"
    private applicants = "//*[@id='sidebar']/ul/li[7]/a[contains(.,'Applicants')]"
    private statistics = "//*[@id='sidebar']/ul/li[8]/a[contains(.,'Statistics')]"
    private support = "//*[@id='sidebar']/ul/li[9]/a[contains(.,'Support')]"
    private experiences = "//*[@id='sidebar']/ul/li[10]/a[contains(.,'Experiences')]"
    private regionalSettings = "//*[@id='sidebar']/ul/li[11]/a[contains(.,'Regional Settings')]"
    private profile = "//*[@id='sidebar']/ul/li[12]/a[contains(.,'Profile')]"
    private logout = "//*[@id='sidebar']/ul/li[13]/a[contains(.,'Logout')]"

    //-------verify_SideBar_Elements-------
    verifySideBarElements(){
        cy.xpath(this.gateAccess).should('be.visible')
        cy.xpath(this.navePhoto).should('be.visible')
        cy.xpath(this.calendar).should('be.visible')
        cy.xpath(this.meetings).should('be.visible')
        cy.xpath(this.facilities).should('be.visible')
        cy.xpath(this.inmates).should('be.visible')
        cy.xpath(this.correspondance).should('be.visible')
        cy.xpath(this.volunteers).should('be.visible')
        cy.xpath(this.applicants).should('be.visible')
        cy.xpath(this.statistics).should('be.visible')
        cy.xpath(this.support).should('be.visible')
        cy.xpath(this.experiences).should('be.visible')
        cy.xpath(this.regionalSettings).should('be.visible')
        cy.xpath(this.profile).should('be.visible')
        cy.xpath(this.logout).should('be.visible')
    }

    //-------click_All_Side_Bar_Categories-------
    //-------calendar-------

    private dropdown = "//select[@id='Calendar']"
    private addMeeting = "//button[@id='addButton']"
    private search = "//*[@id='myTable_filter']/label/input"


    clickCalendar(){
        return cy.xpath(this.calendar).click()
    }

    select_Dropdown_Option(){
        return cy.xpath("//select[@id='Calendar']").select('Personal')
    }

    clickCalCat(){
        return cy.xpath("//select[@id='Calendar']").select('Personal')
    }

    clickMeetings(){
        return cy.xpath(this.meetings).click()
    }

    verifyAddMeetingBtn(){
        return cy.xpath(this.addMeeting).should('be.visible')
    }
    
    sendKeysSearch(){
        let  text = 'this is a test'
         cy.xpath(this.search).type(text)
    }

    test_Calendar_Cat(){
        this.clickCalendar()
        this.select_Dropdown_Option()
    }

    test_Meetings_Cat(){
       // this.clickMeetings()
       // this.verifyAddMeetingBtn()
        //this.sendKeysSearch()
    }

    clickAllSideBarCategories(){
        this.test_Calendar_Cat()
        this.test_Meetings_Cat()
    }

}
export default new SideBarMenu();

