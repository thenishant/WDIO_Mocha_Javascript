import allure from '@wdio/allure-reporter';

global.allure = allure;
let channel1 = 'Channel1';

let testPath = 'src/test/generated';
export const config = {
  runner: 'local',
  specs: [`${testPath}/*.js`],

  suites: {
    channel1: [
      `${testPath}/channel1_*.js`,
    ], channel2: [
      `${testPath}/channel2_*.js`,
    ], channel3: [
      `${testPath}/channel3_*.js`,
    ], channel4: [
      `${testPath}/channel4_*.js`,
    ],

  },
  maxInstances: 20,
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        // binary: '/Users/nishant/Development/Personal/WDIO_Mocha_Javascript/chrome/mac_arm-119.0.6045.105/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
        args: [
          '--no-sandbox',
          '--disable-infobars',
          '--disable-gpu',
          '--headless',
          '--window-size=1440,735'
        ],
      },
    },
  ],
  // concurrency: 20,


  before: function () {
  },

  after: function () {
  }
};
