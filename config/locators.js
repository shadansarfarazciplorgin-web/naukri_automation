module.exports = {
    homePage: {
        loginButton: '//a[@id="login_Layer"]',
        searchKeywordInput: '//button[@aria-label="Search jobs here"]',
        jobInput: "//input[@placeholder='Enter keyword / designation / companies']",
        experienceDropdown: "//div[@class='dropdownMainContainer']",
        locationInput: '//input[@placeholder=\'Enter location\']',
        searchButton: '//button[@aria-label="Search"]',
        userName: '.info__heading',
    },
    loginPage: {
        usernameInput: '//input[@placeholder="Enter your active Email ID / Username"]',
        passwordInput: '//input[@placeholder="Enter your password"]',
        loginSubmitButton: '//button[normalize-space()="Login"]',
        errorMessage: '.error-txt, .otp-error',
    },
    jobSearchResultsPage: {
        jobCards: '//div[contains(@class, "srp-jobtuple-wrapper")]',
        jobTitleFirst: '//div[contains(@class, "srp-jobtuple-wrapper")]//a[contains(@class, "title")]',
    },


};
