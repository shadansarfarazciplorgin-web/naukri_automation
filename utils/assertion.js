const { expect } = require('@playwright/test');

async function expectVisible(locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout });
}

async function expectNotVisible(locator, timeout = 5000) {
    await expect(locator).not.toBeVisible({ timeout });
}

async function expectTextContains(locator, text, timeout = 5000) {
    await expect(locator).toContainText(String(text), { timeout });
}

async function expectUrlContains(page, pattern, timeout = 10000) {
    if (pattern instanceof RegExp) {
        await expect(page).toHaveURL(pattern, { timeout });
    } else {
        await expect(page).toHaveURL(new RegExp(String(pattern)), { timeout });
    }
}

async function expectUrlNotContains(page, pattern, timeout = 10000) {
    if (pattern instanceof RegExp) {
        await expect(page).not.toHaveURL(pattern, { timeout });
    } else {
        await expect(page).not.toHaveURL(new RegExp(String(pattern)), { timeout });
    }
}

async function expectCountGreaterThan(locator, n) {
    const count = await locator.count();
    expect(count).toBeGreaterThan(n);
}

module.exports = {
    expectVisible,
    expectNotVisible,
    expectTextContains,
    expectUrlContains,
    expectCountGreaterThan,
    expectUrlNotContains,
};
