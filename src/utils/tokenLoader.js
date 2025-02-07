const fs = require('fs');
const { TOKEN_FILE } = require('../config/constants');
const { logSuccess, logError } = require('./logger');

function loadTokens() {
  try {
    const data = fs.readFileSync(TOKEN_FILE, 'utf8');
    const tokens = data.split('\n').filter((line) => line.trim());
    logSuccess(`✅ ${tokens.length} tokens loaded.\n`);
    return tokens;
  } catch (e) {
    logError(`❌ Error loading tokens: ${e}`);
    return [];
  }
}

module.exports = { loadTokens };
