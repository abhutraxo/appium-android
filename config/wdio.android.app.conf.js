const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'emulator 5554',
        'appium:platformVersion': '10',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
