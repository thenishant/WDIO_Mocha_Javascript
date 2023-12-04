// generateTests.js

import fs from 'fs';
import path from 'path';

function generateLabels(count) {
    const labels = [];
    for (let i = 1; i <= count; i++) {
        labels.push(`label${i}`);
    }
    return labels;
}

const channels = ['channel1', 'channel2', 'channel3', 'channel4'];
const labels = generateLabels(60);

const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);
const generatedTestsDir = path.join(currentModuleDir, './generated');

// Ensure that the directory exists
fs.mkdirSync(generatedTestsDir, { recursive: true });

channels.forEach((channel) => {
    labels.forEach((label) => {
        const testName = `Test suite for Channel @${channel}, Label ${label}`;
        const testContent = `
            import allure from '@wdio/allure-reporter';

            global.allure = allure;

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            describe("${testName}", () => {
                it("should have your test logic", async() => {
                    // Your test logic here
                    await sleep(5000); // Sleep for 5 seconds
                    console.log("Running test on channel: ${channel}, label: ${label}");
                    const pageTitle = browser.getTitle();
                    // assert.strictEqual(pageTitle, 'Your Expected Page Title');
                });
            });
        `;

        const filePath = path.join(generatedTestsDir, `${channel}_${label}.js`);

        fs.writeFileSync(filePath, testContent);
    });
});
