const logger = require('../utils/logger');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    logger.info(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator, text) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  async getText(locator) {
    await locator.waitFor({ state: 'visible' });
    return (await locator.textContent())?.trim();
  }

  async isVisible(locator) {
    try {
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async waitForUrlContains(text) {
    await this.page.waitForURL(`**${text}**`);
  }
}

module.exports = { BasePage };
