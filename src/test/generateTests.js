import fs from 'fs';
import path from 'path';

const channels = ['channel1', 'channel2', 'channel3', 'channel4'];

const labels = generateLabels(60);
const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);
const generatedTestsDir = path.join(currentModuleDir, './generated');

function generateLabels(count) {
  const labels = [];
  for (let i = 1; i <= count; i++) {
    labels.push(`label${i}`);
  }
  console.log(`Created ${labels.length * channels.length} test files`)
  return labels;
}

// Ensure that the directory exists
fs.mkdirSync(generatedTestsDir, {recursive: true});

channels.forEach((channel) => {
  labels.forEach((label) => {
    const testName = `Test suite for Channel @${channel}, Label ${label}`;
    const testContent = `
            import allure from '@wdio/allure-reporter';
            global.allure = allure;

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            describe("${testName}", async () => {
              it("should have your test logic", async function () {
                  await sleep(20000); // Sleep for 20 seconds
                  console.log("Running test on channel: ${channel}, label: ${label}");
              });
          });
        `;

    const filePath = path.join(generatedTestsDir, `${channel}_${label}.js`);

    fs.writeFileSync(filePath, testContent);
  });
});
