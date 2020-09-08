import { danger, fail } from 'danger';
const fs = require('fs');
const stylelint = require('danger-plugin-stylelint');

// Min 2 reviewers required
const reviewersCount = danger.github.requested_reviewers.users.length;
if (reviewersCount === 0) {
  fail('Please add at least 2 reviewer');
} else if (reviewersCount > 2) {
  fail('Please get approval/review from at least 2 people');
};

// ESLINT
const esLintFile = 'eslint-output.json';
const esLinterOutput = fs.readFileSync(esLintFile).toString();
const esLintJson = JSON.parse(esLinterOutput);

if (Object.keys(esLintJson).length !== 0) {
  for (let i = 0; i < esLintJson.length; i++) {
    const lintObj = esLintJson[i];
    const filePath = lintObj.filePath;
    const lineNo = lintObj.messages[0].line;
    const dangerMessage = lintObj.messages[0].message;
    const completeMessage = `Path: ${filePath} - Line: ${lineNo} - message: ${dangerMessage}`;

    fail(`Eslint Failure: ${completeMessage}`);
  }
}

// TODO jest will be addedd
// // TEST
// jest.default();

// STYLELINT
stylelint.default();
