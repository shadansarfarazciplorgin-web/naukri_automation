const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginButton = page.getByText('Login', { exact: true });
    this.registerButton = page.getByText('Register', { exact: true });
    this.searchKeywordInput = page.getByPlaceholder(/Enter skills \/ designations \/ companies/i);
    this.searchLocationInput = page.getByPlaceholder(/Enter location/i);
    this.searchButton = page.locator('button.qsbSubmit');
  }

  async openLogin() {
    await this.click(this.loginButton);
  }

  async searchJob(keyword, location) {
    await this.fill(this.searchKeywordInput, keyword);
    if (location) {
      await this.fill(this.searchLocationInput, location);
    }
    await this.click(this.searchButton);
  }
}

module.exports = { HomePage };
