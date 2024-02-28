const {defineConfig} = require("cypress");
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
// const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents,
        specPattern: "**/features/*.feature",
        scrollBehavior: 'center',
        defaultCommandTimeout: 30 * 1000,
        viewportWidth: 1920, // Most used Desktop size
        viewportHeight: 1080, // Most used Desktop size
        browser: 'chrome', // Most used browser
    },
});


async function setupNodeEvents(on, config) {
    const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    });
    on('file:preprocessor', bundler);
    await addCucumberPreprocessorPlugin(on, config);
    return config;
}