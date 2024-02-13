
export class HomePage {

 verifySearchbarIsDisplayed(){
    cy.get('#searchbox_input').should('be.visible')
}

 verifySearchbarIsActive(value){
    cy.get('.searchbox_input__bEGm3').invoke('attr', 'data-state').then(value=>{
        const attributeValue = value
        expect(attributeValue).to.be.equal(value);
    })
}

clickSettings(){
    cy.get('[class*="container_fullWidth"] [class="header_menuIcon__D1FfU"]').click()
    cy.get('.sideMenu_section__SRgeu').contains('All Settings').click({force: true});
}

fillQueryInSearchBar(query){
    cy.get('#searchbox_input').type(query)
    cy.get('[class*="searchbox_iconWrapper"] button[aria-label="Search"] svg').click();
}
}

export const onHomePage = new HomePage();