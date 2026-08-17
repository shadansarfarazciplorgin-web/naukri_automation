const { test, expect } = require('../fixtures/pageFixtures');
const config = require('../config/env.config');

test.describe('Naukri.com - Login', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto('/');
  });

  test('should open login modal from homepage @smoke', async ({ homePage, page }) => {
    await homePage.openLogin();
    await expect(page.locator('#usernameField')).toBeVisible();
  });

  test('should login with mobile number and OTP @regression', async ({ homePage, loginPage, page }) => {
    await homePage.openLogin();
    await loginPage.loginWithMobileOtp(config.mobile, config.otp);
    // Duplicate/registered mobile numbers are expected to log in successfully - no validation error expected.
    await expect(page).not.toHaveURL(/nlogin/i);
  });
});
