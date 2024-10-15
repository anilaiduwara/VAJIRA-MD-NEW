const config = require('../settings')
const {
    cmd,
    commands
} = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')




cmd({
    pattern: "uploadme",
    react: "✔️",
    alias: ["upme"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*.upmv jid & mv (2024) TV Series E3*')
const data = q.split(" | ")[0] 
const datas = q.split(" | ")[1] 
const datase = q.split(" ¥ ")[1]
 await conn.sendMessage(from, { document : { url :  data } ,caption: data  ,mimetype: datas , fileName: `DOWNLOADED.${datase}` })
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadmovie",
    react: "✔️",
    alias: ["upmv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, chat, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
      

 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *🎬 BLACK-LEAGUE-MD 🎬*`  ,mimetype: "video/mp4" , fileName: `🎬 MOVIE DOWNLOADER 🎬\n${datas}.mp4` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})


cmd({
    pattern: "moviekv",
    react: "✔️",
    alias: ["mkv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, chat, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .mkv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
      

 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *🎬 BLACK-LEAGUE-MD 🎬*`  ,mimetype: "video/mkv" , fileName: `🎬 MOVIE DOWNLOADER 🎬\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})					    

cmd({
    pattern: "uploadtv",
    react: "✔️",
    alias: ["uptv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "video/mp4" , fileName: `📺 ANILA LOCHANA 📺\n${datas}.mp4` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadtvm",
    react: "✔️",
    alias: ["uptvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "video/mkv" , fileName: `📺 ANILA LOCHANA 📺\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadmoviem",
    react: "✔️",
    alias: ["upmvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *ANILA LOCHANA*`  ,mimetype: "video/mkv" , fileName: `🎬 BLACK-LEAGUE-MD 🎬\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzip",
    react: "✔️",
    alias: ["upzip"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *ANILA LOCHANA*`  ,mimetype: "application/zip" , fileName: `🎬 BLACK-LEAGUE-MD  \n${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzipn",
    react: "✔️",
    alias: ["upzipn"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & mv (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "application/zip" , fileName: `📃 MADE BY ANILA LOCHANA 📃\n${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzipfile",
    react: "✔️",
    alias: ["upzipfile"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .upmv jid & Halo (2024) TV Series E3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "application/zip" , fileName: `${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

