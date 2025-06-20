// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // AngularJS core + mocks from node_modules
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // Your app and test files
      'app.js',
      'calculator.controller.js',
      'calculator.spec.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress','kjhtml'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'], // or use 'Chrome' for visible browser

    singleRun: false,

    concurrency: Infinity,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter' // 👈 add this plugin
    ],
    client: {
      clearContext: false // 👈 keep Jasmine Spec Runner UI open in Chrome
    }
  });
};
