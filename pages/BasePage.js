const logger = require('../utils/logger');
const { ElementUtils } = require('../utils/elementUtils');

class BasePage extends ElementUtils {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
  }

  async goto(url) {
    logger.info(`Navigating to ${url}`);
    await this.page.goto(url);
  }
  // Element actions are inherited from ElementUtils
}

module.exports = { BasePage };
