const { BasePage } = require('./BasePage');
const { jobSearchResultsPage } = require('../config/locators');

class JobSearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.jobCards = page.locator(jobSearchResultsPage.jobCards);
    this.jobTitleFirst = this.jobCards.locator(jobSearchResultsPage.jobTitleFirst);
    this.noResultsMessage = page.locator(jobSearchResultsPage.noResultsMessage);
  }

  async getResultsCount() {
    return this.jobCards.count();
  }

  async openFirstJob(page) {
    return await this.clickAndWaitForNewPage(this.jobCards.first());
  }
}

module.exports = { JobSearchResultsPage };
