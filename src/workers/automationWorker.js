const { getPosition } = require('../services/positionService');
const { pingServer } = require('../services/pingService');
const { logError } = require('../utils/logger');

async function runAutomation(token, index) {
  while (true) {
    await getPosition(token, index);
    await pingServer(token, index);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

module.exports = { runAutomation };
