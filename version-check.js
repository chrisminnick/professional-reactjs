const semver = require('semver');

console.log('Checking node version: ');
const packageJson = require('./package.json');
const expectedVersion = packageJson.engines.node;
const actualVersion = process.version;
if (semver.gt(expectedVersion, actualVersion)) {
    console.log('Incorrect node version. Expected ' + expectedVersion + '. Actual: ' + actualVersion);
    process.exit(1);
} else {
    console.log('Node version ok: ' + actualVersion);
}