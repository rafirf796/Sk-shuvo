const axios = require("axios");
module.exports.config = {
  'name': 'ai',
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "JOY",
  'description': "Collects information from ChatGPT ",
  'commandCategory': 'ai',
  'usages': "[ask]",
  'cooldowns': 0x2,
  'dependecies': {
    'axios': "1.4.0"
  }
};
module.exports.run = async function ({
  api: _0x2a16f8,
  event: _0x3e3436,
  args: _0x3408a4,
  Users: _0x1db9a5
}) {
  const {
    threadID: _0x3326a0,
    messageID: _0x46756e
  } = _0x3e3436;
  const _0x2b5ed0 = encodeURIComponent(_0x3408a4.join(" "));
  if (!_0x3408a4[0]) {
    return _0x2a16f8.sendMessage("Please type a message...", _0x3326a0, _0x46756e);
  }
  _0x2a16f8.sendMessage("JOY-BOT Searching for an answer, please wait...", _0x3326a0, _0x46756e);
  try {
    _0x2a16f8.setMessageReaction('⌛', _0x3e3436.messageID, () => {}, true);
    const _0x28819b = await axios.get("https://priyansh-ai.onrender.com/api/blackboxai?query=" + encodeURIComponent(_0x2b5ed0));
    const _0xa8567e = _0x28819b.data.priyansh;
    _0x2a16f8.sendMessage(_0xa8567e, _0x3e3436.threadID, _0x3e3436.messageID);
    _0x2a16f8.setMessageReaction('✅', _0x3e3436.messageID, () => {}, true);
  } catch (_0x1dc3a8) {
    console.error("Error fetching package.json:", _0x1dc3a8);
    _0x2a16f8.sendMessage("An error occurred while fetching data. Please try again later.", _0x3e3436.threadID, _0x3e3436.messageID);
  }
};
