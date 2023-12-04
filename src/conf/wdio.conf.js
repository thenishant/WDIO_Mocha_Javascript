import allure from '@wdio/allure-reporter';

global.allure = allure;

export const config = {
    runner: 'local',
    specs: [
        '../test/generated/*.js', // Include the generated test files
    ],
    maxInstances: 40,
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
    concurrency: 40,

    // ... other configuration options ...

    before: function () {
        // Your setup logic before tests
    },

    after: function () {
        // Your teardown logic after all tests
    }
};
