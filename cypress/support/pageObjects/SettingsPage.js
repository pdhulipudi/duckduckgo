export class SettingsPage{

    clickOnSettingsPageLinks(label){
        cy.contains(label).click();
    }

    clickOnTheme(theme) {
        cy.contains(theme).click()
    }

    verifyThemeUpdated(expectedTheme){
        cy.get('[data-ntp-features="tracker-stats-widget:off"]').invoke('attr', 'class').then(value=>{
        const attributeValue = value
        expect(attributeValue).to.contain(Cypress._.lowerCase(expectedTheme));
    })
}
}

export const settingsPage = new SettingsPage();