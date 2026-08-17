# Naukri Automation Framework

Industry-standard UI automation framework built with **Playwright + JavaScript**, using the **Page Object Model (POM)** pattern, to automate [naukri.com](https://www.naukri.com).

## Tech Stack
- Playwright Test (`@playwright/test`)
- JavaScript (CommonJS)
- Page Object Model + Fixtures
- Faker.js for test data generation
- dotenv for environment configuration
- GitHub Actions CI

## Project Structure
```
naukri_automation/
├── config/              # Environment configuration
├── data/                # Static test data (JSON)
├── fixtures/            # Custom Playwright fixtures (page object wiring)
├── pages/               # Page Object classes
├── tests/               # Test specs
├── utils/               # Logger, data generators, helpers
├── playwright.config.js
└── .github/workflows/   # CI pipeline
```

## Setup
```bash
npm install
npx playwright install
cp .env.example .env
```

## Running Tests
```bash
npm test                 # run all tests, all browsers
npm run test:headed      # run in headed mode
npm run test:smoke       # run tests tagged @smoke
npm run test:regression  # run tests tagged @regression
npm run test:chromium    # run only on Chromium
npm run report           # open last HTML report
```

## Configuration
Environment values are read from `.env` (see `.env.example`):
- `BASE_URL` – target environment URL
- `NAUKRI_MOBILE` / `NAUKRI_OTP` – login credentials used by OTP-based login flow
- `HEADLESS` – run browsers headless (`true`/`false`)

## Conventions
- Every UI page has a corresponding class in `pages/` extending `BasePage`.
- Tests only interact with page objects/fixtures, never raw locators.
- Tag tests with `@smoke` / `@regression` for selective execution.
- Traces, screenshots and videos are captured automatically on failure (see `playwright.config.js`).
