require('dotenv').config();

module.exports = {
  PING_URL: 'https://ceremony-backend.silentprotocol.org/ceremony/ping',
  POSITION_URL: 'https://ceremony-backend.silentprotocol.org/ceremony/position',
  TOKEN_FILE: 'tokens.txt',
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  POSITION_THRESHOLD: 10 // 触发通知的位置阈值
};
