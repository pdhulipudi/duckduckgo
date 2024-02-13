export class SettingsPage {

    //Click on given tab/link on the settings page
    clickOnSettingsPageLinks(label) {
        cy.contains(label).click();
    }

    //Click on given theme eg: Dark
    clickOnTheme(theme) {
        cy.contains(theme).click()
    }

    //Verify whether selected theme has been applied - verified by checking class which gets updated
    verifyThemeUpdated(expectedTheme) {
        cy.get('[data-ntp-features="tracker-stats-widget:off"]').invoke('attr', 'class').then(value => {
            const attributeValue = value
            expect(attributeValue).to.contain(Cypress._.lowerCase(expectedTheme));
        })
    }
}

export const settingsPage = new SettingsPage();