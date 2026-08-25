const { BasePage } = require('./BasePage');
const { homePage } = require('../config/locators');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // keyword input may be named jobInput in locators
    this.searchInput = page.locator(homePage.jobInput);
    this.searchKeywordInput = page.locator(homePage.searchKeywordInput);
    this.searchLocationInput = page.locator(homePage.locationInput);
    this.searchButton = page.locator(homePage.searchButton);
    this.experienceDropdown = page.locator(homePage.experienceDropdown);
  }

  async clickSearchBox() {
    await this.click(this.searchInput);
  }

  async searchForJob(keyword, experience, location) {
    await this.fill(this.searchKeywordInput, keyword);
    await this.selectDropdownOption(this.experienceDropdown, experience);
    await this.fill(this.searchLocationInput, location);
    await this.click(this.searchButton);
  }

}

module.exports = { HomePage };
