exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['vacationTestDeleteError.js'],


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    }

};
