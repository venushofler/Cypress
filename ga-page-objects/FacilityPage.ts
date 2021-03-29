class FacilityPage {

    private facilities = "//span[contains(text(),'Facilities')]"
    private addFacilitiesBtn = "//button[@id='addButton'][contains(text(),'Add Facility')]"
    private folderIcon = "//tbody/tr/th/a[4]/span/*[@class='svg-inline--fa fa-folder fa-w-16']"
    private fileUploadImage = "//body//div/form//div[@class='image-upload-wrap']"
    private selectTypeDrpDwn = "//select[@id='documentType']"
    private docType = "//option[contains(text(),'Other')]"
    private pdf = "//tbody/tr/th/span/*[@class='svg-inline--fa fa-file-pdf fa-w-12']"
    private description = "//input[@id='documentDescription']"
    private removeBtn = "//body/div//form//span[@class ='image-title'][contains(.,'cypress')]"
    private submitBtn = "//input[@id='updateButton']"
    private ownerEmail = "//td[contains(text(),'kuser.regional@gmail.com')]"
    private trashCan = "//*[@id='myTable']/tbody/tr/td[4]/a/span"
    private okConfirmBtn = "//button[@id='myBtn2']"


    navigateToFacilities(){
        cy.xpath(this.facilities).should('be.visible').click()
    }

    verifyAddFacilitiesBtn(){
        cy.xpath(this.addFacilitiesBtn).should('be.visible')
    }

    clickOnFolderIcon(){
        cy.xpath(this.folderIcon).should('be.visible').click()
    }
    
    verifyFileUploloadContainer(){
        cy.xpath(this.fileUploadImage).should('be.visible')
    }

    addFile(){
        let fileUpload = "//body//div/form//div[3]/input[@class='file-upload-input']"
        cy.xpath(fileUpload)
        .attachFile('cypress.pdf', { subjectType: 'drag-n-drop' });
    }

    selectDoumentTypeAddDescription(){
        let pdf = "PDF";
        let fileDescription = "PDF File";
        cy.xpath(this.selectTypeDrpDwn).select(pdf)
        cy.xpath(this.description).type(fileDescription)
    }

    verifyRemoveBtn(){
        cy.xpath(this.removeBtn).should('be.visible')
    }
    
    clickSubmitBtn(){
        cy.xpath(this.submitBtn).should('be.visible').click()
    }

    verifyOwnerEmail(){
        cy.xpath(this.ownerEmail).should('be.visible')
    }

    verifyPDF(){
        cy.xpath(this.pdf).should('be.visible')
    }

    clickDeleteBtn(){
        cy.xpath(this.trashCan).should('be.visible').click()
    }

    clickOK(){
        cy.xpath(this.okConfirmBtn).should('be.visible').click()
    }

    addFileToFolder(){
        this.verifyAddFacilitiesBtn()
        this.clickOnFolderIcon()
        this.verifyFileUploloadContainer()
        this.selectDoumentTypeAddDescription()
        this.addFile()
        this.verifyRemoveBtn()
        this.clickSubmitBtn()
    }

    verifyFileAddedToFacilitiesUser(){
       this.navigateToFacilities()
       this.clickOnFolderIcon()
       this.verifyPDF()
    }

    deleteFile(){
        this.clickDeleteBtn()
        this.clickOK()
     }
 



}
export default new FacilityPage();