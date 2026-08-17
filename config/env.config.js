const path = require('path');

// trust the corporate antivirus (Seqrite) SSL-inspection CA so Node/Playwright can reach naukri.com
const corporateCaPath = path.join(__dirname, '..', 'certs', 'seqrite-ca.pem');
if (!process.env.NODE_EXTRA_CA_CERTS && require('fs').existsSync(corporateCaPath)) {
  process.env.NODE_EXTRA_CA_CERTS = corporateCaPath;
}

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
  mobile: process.env.NAUKRI_MOBILE || '7355652421',
  otp: process.env.NAUKRI_OTP || '000000',
};
