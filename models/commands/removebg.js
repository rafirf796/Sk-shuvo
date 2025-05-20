module.exports.config = {
  'name': "removebg",
  'version': "1.1.1",
  'hasPermssion': 0x0,
  'credits': "Priyansh Rajput",
  'description': "Remove Background from photo",
  'commandCategory': 'Tool',
  'usages': "Reply images or url images",
  'cooldowns': 0x2,
  'dependencies': {
    'form-data': '',
    'image-downloader': ''
  }
};
const axios = require("axios");
const FormData = require('form-data');
const fs = require("fs-extra");
const path = require("path");
const {
  image
} = require("image-downloader");
module.exports.run = async function ({
  api: _0x5717cb,
  event: _0x29409b,
  args: _0x8b47c9
}) {
  if (this.config.credits != "Priyansh Rajput") {
    console.log("[33m[ WARN ][37m Â» Change credits to your mothers dick, bitch:))" + global.config.BOTNAME + " change credit modules \"" + this.config.name + "\"");
    return _0x5717cb.sendMessage("[ WARN ] Change the credits, write Priyansh Rajput again", _0x29409b.threadID, _0x29409b.messageID);
  }
  try {
    if (_0x29409b.type !== "message_reply") {
      return _0x5717cb.sendMessage("You must reply to a photo", _0x29409b.threadID, _0x29409b.messageID);
    }
    if (!_0x29409b.messageReply.attachments || _0x29409b.messageReply.attachments.length == 0x0) {
      return _0x5717cb.sendMessage("You must reply to a photo", _0x29409b.threadID, _0x29409b.messageID);
    }
    if (_0x29409b.messageReply.attachments[0x0].type != "photo") {
      return _0x5717cb.sendMessage("This is not a image", _0x29409b.threadID, _0x29409b.messageID);
    }
    const _0x223613 = _0x29409b.type == "message_reply" ? _0x29409b.messageReply.attachments[0x0].url : _0x8b47c9.join(" ");
    const _0x4aa802 = ['y5K9ssQnhr8sB9Tp4hrMsLtU', 's6d6EanXm7pEsck9zKjgnJ5u', 'GJkFyR3WdGAwn8xW5MDYAVWf', "xHSGza4zdY8KsHGpQs4phRx9", 'ymutgb6hEYEDR6xUbfQUiPri', 'm6AhtWhWJBAPqZzy5BrvMmUp', "ZLTgza4FPGii1AEUmZpkzYb7"];
    const _0x3f9893 = path.resolve(__dirname, "cache", "photo.png");
    await image({
      'url': _0x223613,
      'dest': _0x3f9893
    });
    const _0x5581dd = new FormData();
    _0x5581dd.append("size", "auto");
    _0x5581dd.append('image_file', fs.createReadStream(_0x3f9893), path.basename(_0x3f9893));
    axios({
      'method': 'post',
      'url': "https://api.remove.bg/v1.0/removebg",
      'data': _0x5581dd,
      'responseType': "arraybuffer",
      'headers': {
        ..._0x5581dd.getHeaders(),
        'X-Api-Key': _0x4aa802[Math.floor(Math.random() * _0x4aa802.length)]
      },
      'encoding': null
    }).then(_0xe59986 => {
      if (_0xe59986.status != 0xc8) {
        return console.error("Error:", _0xe59986.status, _0xe59986.statusText);
      }
      fs.writeFileSync(_0x3f9893, _0xe59986.data);
      return _0x5717cb.sendMessage({
        'attachment': fs.createReadStream(_0x3f9893)
      }, _0x29409b.threadID, () => fs.unlinkSync(_0x3f9893));
    })["catch"](_0x2130c6 => {
      return console.error("Request failed:", _0x2130c6);
    });
  } catch (_0x5c3599) {
    console.log(_0x5c3599);
    return _0x5717cb.sendMessage("Have a error", _0x29409b.threadID, _0x29409b.messageID);
  }
};
