const { BasePage } = require('./BasePage');
const { loginPage } = require('../config/locators');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator(loginPage.usernameInput);
    this.passwordInput = page.locator(loginPage.passwordInput);
    this.loginSubmitButton = page.locator(loginPage.loginSubmitButton);
    this.errorMessage = page.locator(loginPage.errorMessage);
  }

  async loginWithCredentials(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginSubmitButton);
  }

  async isLoginFormVisible() {
    return this.isVisible(this.usernameInput);
  }

  async getErrorMessage() {
    return this.getText(this.errorMessage);
  }
}

module.exports = { LoginPage };
