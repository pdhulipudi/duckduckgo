
export class HomePage {

    //To verify whether searchbar is displayed on the homepage
    verifySearchbarIsDisplayed() {
        cy.get('#searchbox_input').should('be.visible')
    }

    /*To verify whether displayed searchbar is active to enter input, verification done using
    data-state attribute which gets updated to suggesting once the searchbar is active*/
    verifySearchbarIsActive(value) {
        cy.get('.searchbox_input__bEGm3').invoke('attr', 'data-state').then(value => {
            const attributeValue = value
            expect(attributeValue).to.be.equal(value);
        })
    }

    //To click on menu icon on the right and click All Settings
    clickSettings() {
        cy.get('[class*="container_fullWidth"] [class="header_menuIcon__D1FfU"]').click()
        cy.get('.sideMenu_section__SRgeu').contains('All Settings').click({ force: true });
    }

    //fill searchbar with user input and click on search
    fillQueryInSearchBar(query) {
        cy.get('#searchbox_input').type(query)
        cy.get('[class*="searchbox_iconWrapper"] button[aria-label="Search"] svg').click();
    }
}

export const homePage = new HomePage();