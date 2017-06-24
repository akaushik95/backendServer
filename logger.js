// DEPENDENCIES
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

// DISPLAY A LOG ON CONSOLE
winston.log('info', 'Hello log files!', {  
  someKey: 'some-value'
})

const consoleConfig = [
  new winston.transports.Console({
    'colorize': true
  })
];

const createLogger = new winston.Logger({
  'transports': consoleConfig
});

// CREATE A SUCCESS LOG FILE
const successLogger = createLogger;
successLogger.add(winstonRotator, {
  'name': 'access-file',
  'level': 'info',
  'filename': './success.log',
  'json': false,
  'datePattern': 'dd-MM-yyyy-',
  'prepend': true
});

// CREATE A ERROR LOG FILE
const errorLogger = createLogger;
errorLogger.add(winstonRotator, {
  'name': 'error-file',
  'level': 'error',
  'filename': './error.log',
  'json': false,
  'datePattern': 'dd-MM-yyyy-',
  'prepend': true
});

module.exports = {
  'successlog': successLogger,
  'errorlog': errorLogger
};