import allure from '@wdio/allure-reporter';
import { setOptions } from 'expect-webdriverio';

global.allure = allure;

export const config = {
    runner: 'local',
    specs: [
        '../test/specs/**.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10, // Number of browser instances to run in parallel
    capabilities: generateCapabilities(),
    concurrency: 5, // Number of tests to run concurrently

    // ... other configuration options ...

    before: function (capabilities, specs) {
        setOptions({ wait: 2000, interval: 100 });
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};

function generateCapabilities() {
    const channels = ['channel1', 'channel2', 'channel3', 'channel4'];
    const labels = generateLabels(1);

    const capabilities = [];

    channels.forEach((channel) => {
        labels.forEach((label) => {
            capabilities.push({
                browserName: 'chrome',
                acceptInsecureCerts: true,
                'goog:chromeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--disable-gpu',
                        '--headless',
                        '--window-size=1440,735'
                    ],
                },
                'bstack:options': {
                    channel,
                    label,
                },
            });
        });
    });

    return capabilities;
}

function generateLabels(count) {
    const labels = [];
    for (let i = 1; i <= count; i++) {
        labels.push(`label${i}`);
    }
    return labels;
}
