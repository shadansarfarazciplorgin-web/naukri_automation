const { BasePage } = require('./BasePage');

class JobDetailPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getJobUrl() {
        return this.page.url();
    }
}

module.exports = { JobDetailPage };
