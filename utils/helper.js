const path = require('path');
const fs = require('fs');

async function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function retry(fn, attempts = 3, delay = 500) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (e) {
            lastError = e;
            if (i < attempts - 1) await sleep(delay);
        }
    }
    throw lastError;
}

async function safeClick(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.click();
}

async function safeFill(locator, text, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.fill(text);
}

async function takeScreenshot(page, name = 'screenshot') {
    const folder = path.join(process.cwd(), 'test-results', 'screenshots');
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    const file = path.join(folder, `${name}-${Date.now()}.png`);
    await page.screenshot({ path: file, fullPage: true });
    return file;
}

function uid(prefix = 'id') {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

module.exports = {
    sleep,
    retry,
    safeClick,
    safeFill,
    takeScreenshot,
    uid,
};
