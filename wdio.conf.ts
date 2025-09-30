export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './src/test/features/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //services: [],
    framework: 'cucumber',
    specFileRetries: 0,
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./src/test/step-definitions/coupon.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 600000,
        ignoreUndefinedDefinitions: false
    },
    beforeScenario: async function() {
        await browser.maximizeWindow();
    },
    afterScenario: async function (world, result, context) {
        await browser.takeScreenshot();
    },
    onComplete: function() {
    },
}
