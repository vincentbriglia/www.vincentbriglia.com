var pkg = require('./package.json');
var capabilities = require('./sauce_labs_capabilities.js').capabilities;

module.exports = function (config) {

    function normalizationBrowserName(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
    }

    var configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'mocha',
            'chai'
        ],

        // list of files / patterns to load in the browser
        // mostly empty because we will load our files via JSPM
        // except for this polyfill for phantomJS
        files: [
            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
            'node_modules/phantomjs-polyfill/bind-polyfill.js'
        ],

        // list of files to exclude
        exclude: [],

        jspm: {
            // Edit this to your needs
            loadFiles: [
                'www/app/**/*.spec.js'
            ],
            serveFiles: [
                'www/app/**/!(*.spec).js',
                'www/app/**/!(*.e2e).js',
                'www/app/**',
                'www/assets/**'
            ],
            config: 'www/config.js',
            packages: 'www/jspm_packages/'
        },

        // pre-process matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'www/app/**/*.spec.js': ['babel'],
            'www/app/**/!(*.spec|*.e2e).js': ['babel', 'coverage']
        },

        // options passed to the babel-compiler
        babelPreprocessor: {},

        proxies: {
            '/base/jspm_packages/': '/base/www/jspm_packages/'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            dir: './dist/coverage/',
            reporters: [{
                type: 'text',
                subdir: normalizationBrowserName
            }, {
                type: 'html',
                subdir: normalizationBrowserName
            }]
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        browserDisconnectTimeout: 10 * 1000, // 10s
        browserDisconnectTolerance: 2,
        browserNoActivityTimeout: 2 * 60 * 1000, // 2m
        captureTimeout: 0,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
        ],

        // plugins: [
        //     'karma-jspm',
        //     'karma-mocha',
        //     'karma-chai',
        //     'karma-babel-preprocessor',
        //     'karma-coverage',
        //     'karma-chrome-launcher',
        //     'karma-firefox-launcher'
        // ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    };

    if (process.env.TRAVIS) {
        configuration.customLaunchers = capabilities;
        configuration.browsers = Object.keys(capabilities);
        configuration.sauceLabs = {
            testName: pkg.name + ' unit test'
        };
    }

    config.set(configuration);
};