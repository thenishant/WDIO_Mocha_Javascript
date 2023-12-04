import allure from '@wdio/allure-reporter';

global.allure = allure;
let channel1 = 'Channel1';

export const config = {

    mochaOpts: {
        grep: '@channel1', // Adjust this pattern accordingly
        // ... other Mocha options
    },

    runner: 'local',
    specs: ['./src/test/generated/*.js'],

    suites: {
        channel1: [
            './src/test/generated/channel1_*.js',
        ], channel2: [
            './src/test/generated/channel2_*.js',
        ], channel3: [
            './src/test/generated/channel3_*.js',
        ], channel4: [
            './src/test/generated/channel4_*.js',
        ],
        otherFeature: [
            // ...
        ]
    },
    maxInstances: 100,
    capabilities: [
        {
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                binary: '/Users/nishant/Development/Personal/WDIO_Mocha_Javascript/chrome/mac_arm-119.0.6045.105/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
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

    // ... other configuration options ...

    before: function () {
        // Your setup logic before tests
    },

    after: function () {
        // Your teardown logic after all tests
    }
};
