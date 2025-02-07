const { getPosition } = require('../services/positionService');
const { pingServer } = require('../services/pingService');
const { logError } = require('../utils/logger');

async function runAutomation(token) {
  while (true) {
    await getPosition(token);
    await pingServer(token);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

module.exports = { runAutomation };
