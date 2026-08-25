const { BasePage } = require('./BasePage');
const { homePage } = require('../config/locators');

class LandingPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginButton = page.locator(homePage.loginButton);
    }

    async openLogin() {
        await this.click(this.loginButton);
    }
}

module.exports = { LandingPage };
