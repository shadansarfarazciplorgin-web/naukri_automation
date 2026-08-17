const { test, expect } = require('../fixtures/pageFixtures');
const testData = require('../data/testData.json');

test.describe('Naukri.com - Home page & Job search', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto('/');
  });

  test('should load homepage successfully @smoke', async ({ page }) => {
    await expect(page).toHaveTitle(/Naukri/i);
  });

  test('should search jobs by keyword and location @regression', async ({
    homePage,
    jobSearchResultsPage,
    page,
  }) => {
    await homePage.searchJob(testData.jobSearch.keyword, testData.jobSearch.location);
    await page.waitForLoadState('domcontentloaded');

    const resultsCount = await jobSearchResultsPage.getResultsCount();
    expect(resultsCount).toBeGreaterThan(0);
  });
});
