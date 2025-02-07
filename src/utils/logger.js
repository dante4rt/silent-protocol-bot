const colors = require('colors');
const moment = require('moment');

colors.setTheme({
  info: 'cyan',
  success: 'green',
  error: 'red',
  warn: 'yellow',
  debug: 'blue',
  timestamp: 'gray',
});

function logInfo(message) {
  console.log(colors.info(`🕒 [${moment().format('HH:mm:ss')}] => ${message}`));
}

function logSuccess(message) {
  console.log(
    colors.success(`🕒 [${moment().format('HH:mm:ss')}] => ${message}`)
  );
}

function logError(message) {
  console.error(
    colors.error(`🕒 [${moment().format('HH:mm:ss')}] => ${message}`)
  );
}

function logWarn(message) {
  console.log(colors.warn(`🕒 [${moment().format('HH:mm:ss')}] => ${message}`));
}

module.exports = { logInfo, logSuccess, logError, logWarn };
