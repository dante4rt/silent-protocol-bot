const { Worker, isMainThread, workerData } = require('worker_threads');
const { loadTokens } = require('./utils/tokenLoader');
const { logError } = require('./utils/logger');
const { runAutomation } = require('./workers/automationWorker');
const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================'));
  console.log(colors.cyan('=          Silent Protocol Bot         ='));
  console.log(colors.cyan('=     Created by HappyCuanAirdrop      ='));
  console.log(colors.cyan('=    https://t.me/HappyCuanAirdrop     ='));
  console.log(colors.cyan('========================================'));
  console.log();
}

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  displayHeader();
  console.log(colors.yellow(`Please wait...\n`));
  await delay(3000);

  const tokens = loadTokens();
  if (tokens.length === 0) {
    logError('❌ No tokens available. Exiting.');
    return;
  }

  tokens.forEach((token, index) => {
    const worker = new Worker(__filename, { 
      workerData: { token, index }
    });
    worker.on('message', (message) => {
      console.log(message);
    });
    worker.on('error', (error) => {
      logError(`❌ Worker ${index} error: ${error}`);
    });
    worker.on('exit', (code) => {
      if (code !== 0) {
        logError(`❌ Worker ${index} stopped with exit code ${code}`);
      }
    });
  });
}

if (isMainThread) {
  main();
} else {
  const { token, index } = workerData;
  runAutomation(token, index).catch((err) => 
    logError(`❌ Worker ${index} error: ${err}`)
  );
}
