const { BasePage } = require('./BasePage');

class JobSearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.jobCards = page.locator('.cust-job-tuple, article.jobTuple');
    this.jobTitleFirst = this.jobCards.first().locator('.title, a.title');
    this.noResultsMessage = page.getByText(/no results found/i);
  }

  async getResultsCount() {
    return this.jobCards.count();
  }

  async openFirstJob() {
    await this.click(this.jobTitleFirst);
  }
}

module.exports = { JobSearchResultsPage };
