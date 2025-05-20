const fs = require('fs');
const path = require("path");
const axios = require("axios");
module.exports.config = {
  'name': "give",
  'version': "1.0.0",
  'hasPermssion': 0x2,
  'credits': "JOY",
  'description': "give file for group members",
  'commandCategory': "Admin",
  'usages': "give to file number and text add raw",
  'cooldowns': 0x0
};
module.exports.run = async function ({
  event: _0x14306d,
  api: _0x52d1cc
}) {
  fs.readdir(__dirname, (_0x1ec0e4, _0x470f65) => {
    if (_0x1ec0e4) {
      console.error("Cannot read directory: ", _0x1ec0e4);
      return;
    }
    const _0x49d6c8 = _0x470f65.filter(_0x3828af => path.extname(_0x3828af).toLowerCase() === ".js");
    let _0x573a8e = "The files are currently in the commands folder!\n";
    _0x49d6c8.forEach((_0x4b2ba7, _0x2f8f33) => {
      _0x573a8e += "\n" + (_0x2f8f33 + 1) + ". " + _0x4b2ba7;
    });
    _0x573a8e += "\n\nReply with the number + del/raw!";
    _0x52d1cc.sendMessage(_0x573a8e, _0x14306d.threadID, (_0x5c2798, _0x2b125d) => {
      if (_0x5c2798) {
        return console.error(_0x5c2798);
      }
      global.client.handleReply.push({
        'name': module.exports.config.name,
        'messageID': _0x2b125d.messageID,
        'author': _0x14306d.senderID
      });
    }, _0x14306d.messageID);
  });
};
module.exports.handleReply = async function ({
  args: _0x4d081e,
  event: _0x5708cf,
  api: _0x5d7d45,
  handleReply: _0x5c8aad
}) {
  const _0x5d5a47 = _0x5708cf.body.split(" ");
  const _0x33606b = parseInt(_0x5d5a47[0], 10);
  const _0x29a33b = _0x5d5a47[1];
  if (isNaN(_0x33606b) || !_0x29a33b) {
    return _0x5d7d45.sendMessage("Invalid input. Please enter: file_number + type (raw/del)", _0x5708cf.threadID, _0x5708cf.messageID);
  }
  const {
    author: _0xe251d5
  } = _0x5c8aad;
  if (_0x5708cf.senderID !== _0xe251d5) {
    return _0x5d7d45.sendMessage("Unauthorized action.", _0x5708cf.threadID, _0x5708cf.messageID);
  }
  fs.readdir(__dirname, async (_0x430cce, _0x27d265) => {
    if (_0x430cce) {
      console.error("Error reading files:", _0x430cce);
      return _0x5d7d45.sendMessage("An error occurred while reading files.", _0x5708cf.threadID, _0x5708cf.messageID);
    }
    const _0x2a97c8 = _0x27d265.filter(_0x3c62d0 => path.extname(_0x3c62d0).toLowerCase() === ".js");
    if (_0x33606b < 1 || _0x33606b > _0x2a97c8.length) {
      return _0x5d7d45.sendMessage("Invalid selection.", _0x5708cf.threadID, _0x5708cf.messageID);
    }
    const _0x320264 = _0x2a97c8[_0x33606b - 1];
    const _0xc1d907 = path.join(__dirname, _0x320264);
    try {
      if (_0x29a33b === "del") {
        fs.unlinkSync(_0xc1d907);
        _0x5d7d45.sendMessage("File deleted: " + _0x320264 + '!', _0x5708cf.threadID, _0x5708cf.messageID);
      } else {
        if (_0x29a33b === "raw") {
          const _0x429107 = fs.readFileSync(_0xc1d907, "utf8");
          const _0x24a58b = await axios.post("https://api.mocky.io/api/mock", {
            'status': 0xc8,
            'content': _0x429107,
            'content_type': "application/json",
            'charset': "UTF-8",
            'secret': "lvbang",
            'expiration': "never"
          });
          if (_0x24a58b.data && _0x24a58b.data.link) {
            _0x5d7d45.sendMessage(_0x24a58b.data.link, _0x5708cf.threadID, _0x5708cf.messageID);
          } else {
            _0x5d7d45.sendMessage("Error generating raw file link.", _0x5708cf.threadID, _0x5708cf.messageID);
          }
        } else {
          _0x5d7d45.sendMessage("Invalid type. Use \"raw\" or \"del\".", _0x5708cf.threadID, _0x5708cf.messageID);
        }
      }
    } catch (_0x4b75d2) {
      console.error("Error processing request:", _0x4b75d2);
      _0x5d7d45.sendMessage("An error occurred while processing your request.", _0x5708cf.threadID, _0x5708cf.messageID);
    }
  });
};
