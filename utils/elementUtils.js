const logger = require('./logger');

class ElementUtils {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
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

    async isVisible(locator, timeout = 5000) {
        try {
            await locator.waitFor({ state: 'visible', timeout });
            return true;
        } catch (e) {
            return false;
        }
    }

    async waitForUrlContains(text) {
        await this.page.waitForURL(`**${text}**`);
    }

    async selectDropdownOption(locator, option) {
        await locator.waitFor({ state: 'visible' });
        const label = String(option).trim();
        // Try native select first
        try {
            await locator.selectOption({ label });
            return;
        } catch (e) {
            // not a native select — try opening custom dropdown and clicking item
        }

        await locator.click();
        // Try to find option inside the dropdown container
        const optionLocator = locator.locator(`text="${label}"`);
        if ((await optionLocator.count()) > 0) {
            await optionLocator.first().click();
            return;
        }

        // Fallback: search globally for visible text and click first match
        const globalOption = this.page.getByText(label, { exact: true }).first();
        if (await globalOption.count()) {
            await globalOption.click();
            return;
        }

        throw new Error(`Option "${label}" not found for dropdown`);
    }
}

module.exports = { ElementUtils };
