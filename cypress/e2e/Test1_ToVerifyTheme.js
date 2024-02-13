/// <reference types="cypress" />

// importing page objects
import { homePage } from '../support/pageObjects/HomePage';
import { settingsPage } from '../support/pageObjects/SettingsPage';

describe('DuckDuckGo Testcases', () => {
    //declaring a closure variable
    let data;
    //reading testdata 
    before('Initializing Test Data', () => {
        cy.fixture('uiTestData').then((tData) => {
            data = tData;
        });
    });

    //To openhome page as a precautionary-step before every test
    beforeEach('Navigate to home page', () => {
        //from added commands
        cy.navigateToHomePage();
    })

    // Navigate to homepage and verify page title, and searchbar
    it('Verify homepage title and searchbar', function () {
        cy.title().should('equal', data.pageTitle);
        homePage.verifySearchbarIsDisplayed()
        homePage.verifySearchbarIsActive(data.searchDisplayeAttribute)
        homePage.clickSettings()
        settingsPage.clickOnSettingsPageLinks(data.appearanceTab)
        settingsPage.clickOnTheme(data.darkTheme)
        settingsPage.verifyThemeUpdated(data.darkTheme)
    })

    //Navigate to settings page, select theme and verify
    it('Navigate to settings and change Theme', function () {
        homePage.clickSettings()
        settingsPage.clickOnSettingsPageLinks(data.appearanceTab)
        settingsPage.clickOnTheme(data.darkTheme)
        settingsPage.verifyThemeUpdated(data.darkTheme)
    })
})

