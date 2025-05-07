const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "SANU-MD~YswWUBpC#lBcbRhcAONyvDi2Z6a7rXeF7-06HFIuIqy5TeQ6636Y",
  OWNER_NUM: process.env.OWNER_NUM || "94763007898",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n*𝑄𝑈𝐸𝐸𝑁 𝑆𝐴𝑁𝑈*\n\n*watsapp channel link* - https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
  //AUTO_RECORDING
};
