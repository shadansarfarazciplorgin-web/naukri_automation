const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('#usernameField');
    this.passwordInput = page.locator('#passwordField');
    this.loginSubmitButton = page.getByRole('button', { name: /^login$/i });
    this.errorMessage = page.locator('.error-txt, .otp-error');

    // OTP based login (mobile number flow)
    this.mobileInput = page.locator('#usernameField');
    this.otpInputs = page.locator('input.otp-input, input[maxlength="1"]');
    this.otpSubmitButton = page.getByRole('button', { name: /verify|submit/i });
  }

  async loginWithCredentials(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginSubmitButton);
  }

  async loginWithMobileOtp(mobile, otp) {
    await this.fill(this.mobileInput, mobile);
    await this.click(this.loginSubmitButton);

    const otpBoxes = await this.otpInputs.all();
    if (otpBoxes.length > 1) {
      for (let i = 0; i < otp.length && i < otpBoxes.length; i++) {
        await otpBoxes[i].fill(otp[i]);
      }
    } else if (otpBoxes.length === 1) {
      await otpBoxes[0].fill(otp);
    }
    await this.click(this.otpSubmitButton);
  }

  async getErrorMessage() {
    return this.getText(this.errorMessage);
  }
}

module.exports = { LoginPage };
