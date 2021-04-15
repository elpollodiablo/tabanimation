// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = '/usr/bin/chromium'
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    webpack: {
      devtool: 'cheap-eval-source-map',
    },
    //browsers: ['PhantomJS', 'PhantomJS_custom'],
    /* didn't quite work
    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    */
    plugins: [
      require('karma-jasmine'),
      require('karma-verbose-reporter'),
      require('karma-chrome-launcher'),
      //require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    browserNoActivityTimeout: 60000,
    files: [
        {pattern: 'test.ts', included: false, served: false},
        {pattern: 'app/pages/error/error.page.spec.ts ', included: false, served: false},
        {pattern: 'app/*.html', included: false, served: false},
        {pattern: 'app/*.ts', included: false, served: false},
        {pattern: 'app/*/*.ts', included: false, served: false},
        {pattern: 'app/*/*.html', included: false, served: false},
        {pattern: 'app/*/*/*.ts', included: false, served: false},
        {pattern: 'app/*/*/*.html', included: false, served: false},
    ]
  });
};
