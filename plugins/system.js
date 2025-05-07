const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "system",
    alias: ["system"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*, am alive 
*╭─────────────···▸*
*┋▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *🥀𝑄𝑈𝐸𝐸𝑁 𝑆𝐴𝑁𝑈🥀*
*┋▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*┋▸* *ʜᴏsᴛɴᴀᴍᴇ* : *[${os.hostname()}]*
*┋▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*┋*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

> > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ꜱᴀɴᴜ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/pjayd0.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: '𝑄 𝑈 𝐸 𝐸 𝑁  𝑆 𝐴 𝑁 𝑈',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in system command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
