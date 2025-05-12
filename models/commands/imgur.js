module.exports.config = {
 name: "imgur",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "JOY",
 description: "create your video link",
 commandCategory: "other", 
 usages: "[tag]", 
 cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];

const apis = await axios.get('https://raw.githubusercontent.com/JUBAED-AHMED-0JOY/Joy/main/api.json')
 const Joy = apis.data.imgur
 
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
 if(!linkanh) return api.sendMessage(' আপনি যেই ছোবি টাকে Imgur link বানাতে চান সেই ছোবি টা imgur লিখে রিপ্লাই করুন ', event.threadID, event.messageID)
const res = await axios.get(`${Joy}/imgur?link=${encodeURIComponent(linkanh)}`); 
var img = res.data.uploaded.image;
 return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
}
