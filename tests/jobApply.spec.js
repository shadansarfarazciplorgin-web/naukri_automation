const { test, expect } = require('../fixtures/pageFixtures');
const testData = require('../data/testData.json');
const { regex } = require('../config/constants');
const assertion = require('../utils/assertion');

test.describe('Naukri.com - Login', () => {
    test('should login with email and password successfully @smoke', async ({ landingPage, loginPage, page }) => {
        const { email, password } = testData.validUser;

        await landingPage.openLogin();
        await loginPage.loginWithCredentials(email, password);
        await assertion.expectUrlNotContains(page, regex.loginUrl);
    });
});
