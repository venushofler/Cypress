import { last } from "cypress/types/lodash"

class ApplicantsModule {

    // New Applicant
    private applicants = "//*[@id='sidebar']/ul/li[7]/a[contains(.,'Applicants')]"
    private addApplicant = "//button[@id='addButton']"
    private firstNameField = "//input[@id='firstName']"
    private lastNameField = "//input[@id='lastName']"
    private firstName = "Jane"
    private lastName = "Doe"
    private emailField = "//input[@id='email']"
    private email = "vhof757@gmail.com"
    private homePhoneField = "//input[@id='homePhone']"
    private homePhone = "1234567890"
    private mobilePhoneField = "//input[@id='phone']" 
    private mobilePhone = "7572409995"
    private textCheckBox = "//input[@id='textOptIn']"

    // Personal Info Accordian
    private personalInfoAccordian = "//div[contains(text(),'Personal Info')]"
    private addressField = "//input[@id='address']"
    private address = "123 Sesame Street"
    private cityField = "//input[@id='city']"
    private city = "New York City"
    private stateField = "//input[@id='state']"
    private state = "NY"
    private zipCodeField = "//input[@id='zipCode']"
    private zipCode = "10912"
    private genderDropdown = "//select[@id='volunteerGender']"
    private birthDateField = "//input[@id='birthDate']"
    private birthDate = "01251970" // also has a popup calendar; how do we select birthdate using the popup calendar?
    private maritalStatusDropdown = "(//*[@id='communicationInfo'])[2]"
    private tbTestingField = "//input[@id='tbTestingDate']" // also has a popup calendar
    private tbTestingDate = "02142020"
    private addLanguageIcon = "//*[@id='collapseOne']/div/div/p/a"
    private languageDropdown = "//select[@id='languageID']"
    private languageSelection ="//option[contains(text(),'English')]"
    private proficiencyDropdown = "//select[@id='proficiency']"
    private contactField = "//input[@id='emergencyContact']"
    private relationshipDropdown = "//select[@id='emergencyContactRelationship']"   
    private emergencyPhoneField = "//input[@id='emergencyContactNumber']"
    // Theocratic Info Accordian
    private theocraticInfoAccordian = "//div[contains(text(),'Theocratic Info')]"
    private congregationDropdown = "//select[@id='congregationID']"
    private baptismDateField = "//*[@id='baptismDate']"
    private addResponsibilitiesIcon = "//thead/tr[1]/th[1]/a[1]"
    private responsibilityDropdown = "//select[@id='responsibility']"

    // // Application Accordian
    private applicationAccordian = "//div[@id='Application']"
    private criminalRecordField = "//input[@id='criminalRecord']"
    private mon = "//input[@id='mondayAvailability']"
    private tue = "//input[@id='tuesdayAvailability']"
    private wed = "//input[@id='wednesdayAvailability']"
    private thur = "//input[@id='thursdayAvailability']"
    private fri = "//input[@id='fridayAvailability']" 
    private sat = "//input[@id='saturdayAvailability']"
    private sun = "//input[@id='sundayAvailability']"

    // Steps Accordian
    private stepsAccordian = "//div[@id='Steps']"
    private assignedVolunteerDropdown = "//select[@id='applicantVolunteer']"
    private volunteerChoice = "//option[contains(text(),'Hofler, Venus')]"
    private approvedCheckbox = "//input[@id='approved']"
    private createApplicantButton = "//button[contains(text(),'Create')]"
    private createBtn = "//button[contains(text(),'Create')]"

    ClickApplicant(){
        return cy.xpath(this.applicants).should('be.visible').click()
    }

    clickAddApplicant(){
        return cy.xpath(this.addApplicant).should('be.visible').click()
    }

    inputFirstName(){
        return cy.xpath(this.firstNameField).type(this.firstName)
    }
    
    inputLastName(){
        return cy.xpath(this.lastNameField).type(this.lastName)
    }

    inputEmail(){
        return cy.xpath(this.emailField).type(this.email)
    }

    inputHomePhone(){
        return cy.xpath(this.homePhoneField).type(this.homePhone)
    }

    inputMobilePhone(){
        return cy.xpath(this.mobilePhoneField).type(this.mobilePhone)
    }

    checkTextOptIn(){
        cy.xpath(this.textCheckBox).check() 
    }

    selectGender(){
        let male = "Male"
        cy.xpath(this.genderDropdown).select(male)
    }

    clickPersonalInfoAccordian(){
        return cy.xpath(this.personalInfoAccordian).should('be.visible').click()
    }

    inputAddress(){
        return cy.xpath(this.addressField).type(this.address)
    }

    inputCity(){
        return cy.xpath(this.cityField).type(this.city)
    }

    inputState(){
        return cy.xpath(this.stateField).type(this.state)
    }

    inputZipCode(){
        return cy.xpath(this.zipCodeField).type(this.zipCode)
    }

    inputBirthDate(){
        return cy.xpath(this.birthDateField).type(this.birthDate)
    }

    selectMaritalStatus(){
        let status = "Married"
        cy.xpath(this.maritalStatusDropdown).select(status)
    }

    inputTbTestingField(){
        return cy.xpath(this.tbTestingField).type(this.tbTestingDate)
    }

    clickAddLanguage(){
        return cy.xpath(this.addLanguageIcon).should('be.visible').click()
    }

    selectLanguage(){
        let language = "English"
        cy.xpath(this.languageDropdown).select(language)
    }

    selectProficiency(){
        let proficiency = "Speak, Read & Write"
        cy.xpath(this.proficiencyDropdown).select(proficiency)
    }

    inputContactName(){
        let name = "John Doe"
        return cy.xpath(this.contactField).type(name)
    }

    selectRelationship(){
        let relationship = "Spouse"
        cy.xpath(this.relationshipDropdown).type(relationship)
    }
    
    inputEmergencyPhoneField(){
        let phone = "919-906-7740"
        return cy.xpath(this.emergencyPhoneField).type(phone)
    }

    clickTheocraticInfoAccordian(){
        return cy.xpath(this.theocraticInfoAccordian).should('be.visible').click()
    }

    selectCongregationDropdown(){
        let congregation = "Harbor Park New York City"
        cy.xpath(this.congregationDropdown).select(congregation)
    }

    inputBaptismDate(){
        let date = "04-06-1996"
        return cy.xpath(this.baptismDateField).type(date)
    }

    clickAddResponsibilities(){
        return cy.xpath(this.addResponsibilitiesIcon).should('be.visible').click()
    }

    selectResponsibility(){
        let responsibilty = "Bible School Graduate"
        cy.xpath(this.responsibilityDropdown).select(responsibilty)
    }

    clickApplicationInfoAccordian(){
        return cy.xpath(this.applicationAccordian).should('be.visible').click()
    }

    inputCriminalRecordField(){
        let answer = "No"
        return cy.xpath(this.criminalRecordField).type(answer)
    }

    inputAvailability(){
        let answer = "F"
        let dayNum = "1"
        cy.xpath(this.mon).type(answer)
        cy.xpath(this.tue).type(answer)
        cy.xpath(this.wed).type(answer)
        cy.xpath(this.thur).type(answer)
        cy.xpath(this.fri).type(answer)
        cy.xpath(this.sat).type(dayNum)
        cy.xpath(this.sun).type(dayNum)
    }

    clickStepsAccordian(){
        return cy.xpath(this.stepsAccordian).should('be.visible').click()
    }

    selectVolunteerDropdown(){
        let volunteer = "Hofler, Venus"
        cy.xpath(this.assignedVolunteerDropdown).select(volunteer)
    }

    checkApprovedCheckbox(){
        cy.xpath(this.approvedCheckbox).check() 
    }

    // clickCreateBtn(){
    //     return cy.xpath(this.createBtn).should('be.visible').click()
    // }

    createApplicant(){
        this.ClickApplicant()
        this.clickAddApplicant()
        this.inputFirstName()
        this.inputLastName()
        this.inputEmail()
        this.inputHomePhone()
        this.inputMobilePhone()
        this.checkTextOptIn()
        this.clickPersonalInfoAccordian()
        this.inputAddress()
        this.inputCity()
        this.inputState()
        this.inputZipCode()
        this.selectGender()
        this.inputBirthDate()
        this.selectMaritalStatus()
        this.inputTbTestingField()
        this.clickAddLanguage()
        this.selectLanguage()
        this.selectProficiency()
        this.inputContactName()
        this.selectRelationship()
        this.inputEmergencyPhoneField()
        this.clickTheocraticInfoAccordian()
        this.selectCongregationDropdown()
        this.inputBaptismDate()
        this.clickAddResponsibilities()
        this.selectResponsibility()
        this.clickApplicationInfoAccordian()
        this.inputCriminalRecordField()
        this.inputAvailability()
        this.clickStepsAccordian()
        this.selectVolunteerDropdown()
        this.checkApprovedCheckbox()
        // this.clickCreateBtn()






    }
}
export default new ApplicantsModule();
