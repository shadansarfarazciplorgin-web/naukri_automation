const path = require('path');

require('dotenv').config();
const env = process.env.ENV || 'qa';
const environments = {
  qa: {
    baseURL: process.env.BASE_URL || 'https://www.naukri.com',
  },
  prod: {
    baseURL: 'https://www.naukri.com',
  },
};

module.exports = {
  env,
  baseURL: environments[env].baseURL,
  headless: process.env.HEADLESS !== 'false',
};
