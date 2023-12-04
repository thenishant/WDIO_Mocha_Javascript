// test.js
const assert = require("assert");
describe('Sample Test', () => {
    it('should run on multiple channels and labels', () => {
        // Access the channel and label from browser capabilities
        const channel = browser.capabilities['bstack:options'].channel;
        const label = browser.capabilities['bstack:options'].label;

        // Your test logic here
        console.log(`Running test on channel: ${channel}, label: ${label}`);

        // Example assertion
        const pageTitle = browser.getTitle();
        assert.strictEqual(pageTitle, 'Your Expected Page Title');
    });
});
