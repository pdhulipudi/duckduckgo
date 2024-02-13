/// <reference types="cypress" />

// importing page objects
import { homePage } from '../support/pageObjects/HomePage';

describe('DuckDuckGo Testcases', () => {
    //declaring a closure variable
    let data;
    //reading api testdata 
    before('Initializing Test Data', () => {
        cy.fixture('apiTestData').then((tData) => {
            data = tData;
        });
    });

    //To openhome page as a precautionary-step before every test
    beforeEach('Navigate to home page', () => {
        //from added commands
        cy.navigateToHomePage();
    })

    //Enter search query through UI actions and verify status of getcall and title of the response is as per input
    it("Enter query in seach bar and verify", function () {
        cy.intercept('GET', Cypress.env('apiUrl')).as('getResults')
        homePage.fillQueryInSearchBar(data.searchQuery)
        cy.wait('@getResults', { 'timeout': 5000 });
        cy.get('@getResults').then(res => {
            expect(res.response.statusCode).to.equal(200);
            cy.wrap(res).get('head').contains('title', data.searchQuery + data.searchResultTitleSuffix)
        })
    })
})

