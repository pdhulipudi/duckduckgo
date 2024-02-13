/// <reference types="cypress" />

import { onHomePage } from '../support/pageObjects/HomePage';
import { settingsPage } from '../support/pageObjects/SettingsPage';


describe('DuckDuckGo Testcases', () => {
    //closure variable
    let data;
    before('Initializing Test Data', () => {
        cy.fixture('apiTestData').then((tData) => {
            data = tData;
        });
    });

    beforeEach('Navigate to home page', () => {
        cy.navigateToHomePage();
    })

    it("Enter query in seach bar and verify", function(){
        cy.intercept('GET', Cypress.env('apiUrl')).as('getResults')
        onHomePage.fillQueryInSearchBar(data.searchQuery)
        cy.wait('@getResults', {'timeout':5000});
        cy.get('@getResults').then(res =>{
            console.log(res.response.statusCode)
            Cypress.log(res.response)
            expect(res.response.statusCode).to.equal(200);
            cy.wrap(res).get('head').contains('title',data.searchQuery + data.searchResultTitleSuffix)
        })
    })
})

