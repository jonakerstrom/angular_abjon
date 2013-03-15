basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

proxies = {
  '/': 'http://localhost:8080/angular_abjon/angular-seed/'
};



//list of files to exclude
exclude = [];

//test results reporter to use
//possible values: dots || progress
reporter = 'progress';

//web server port
//port = 8080;

//cli runner port
//runnerPort = 9100;

//enable / disable colors in the output (reporters and logs)
colors = true;

//level of logging
//possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

//enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

//Start these browsers, currently available:
//- Chrome
//- ChromeCanary
//- Firefox
//- Opera
//- Safari
//- PhantomJS
browsers = ['Chrome'];

//Continuous Integration mode
//if true, it capture browsers, run tests and exit
singleRun = false;



junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
