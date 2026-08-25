module.exports = {
    homePage: {
        loginButton: '//a[@id="login_Layer"]',
        searchKeywordInput: '//button[@aria-label="Search jobs here"]',
        jobInput: "//input[@placeholder='Enter keyword / designation / companies']",
        experienceDropdown: "//div[@class='dropdownMainContainer']",
        locationInput: '//input[@placeholder=\'Enter location\']',
        searchButton: '//button[@aria-label="Search"]',
    },
    loginPage: {
        usernameInput: '//input[@placeholder="Enter your active Email ID / Username"]',
        passwordInput: '//input[@placeholder="Enter your password"]',
        loginSubmitButton: '//button[normalize-space()="Login"]',
        errorMessage: '.error-txt, .otp-error',
    },
    jobSearchResultsPage: {
        jobCards: '.cust-job-tuple, article.jobTuple',
        jobTitleFirst: '.cust-job-tuple .title, article.jobTuple .title, a.title',
        noResultsMessage: 'text=/no results found/i',
    },
};
