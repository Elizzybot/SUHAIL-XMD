const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Elizzybot/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039727490";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_37_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm4vdm96ZjQwZmRkUW5KOTFQZC9nT0k5QTQxdzI2QVVQQkpiNkFhT2FkMG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjQ1VnBjNmxnUUd5SnlxM1JDVHRsSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTc3MzYzNTctZWM3MC00YjI4LThlODItMjk1YzAyMzdkYWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDQ4LFxuICAgICAgMTI5LFxuICAgICAgMjIwLFxuICAgICAgMjIxLFxuICAgICAgMjM1LFxuICAgICAgNTcsXG4gICAgICAxMzcsXG4gICAgICA2OSxcbiAgICAgIDEyMyxcbiAgICAgIDI0MCxcbiAgICAgIDE0NixcbiAgICAgIDIwNCxcbiAgICAgIDEzMixcbiAgICAgIDE4NyxcbiAgICAgIDE5NyxcbiAgICAgIDM4LFxuICAgICAgMTgxLFxuICAgICAgOTYsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDIxNyxcbiAgICAgIDEyMyxcbiAgICAgIDIxNixcbiAgICAgIDE1NixcbiAgICAgIDE0NyxcbiAgICAgIDIsXG4gICAgICAxNDEsXG4gICAgICAzMixcbiAgICAgIDE0NixcbiAgICAgIDEzNixcbiAgICAgIDIwNSxcbiAgICAgIDE1NSxcbiAgICAgIDI0OSxcbiAgICAgIDE3NSxcbiAgICAgIDE0MyxcbiAgICAgIDQ3LFxuICAgICAgMTQxLFxuICAgICAgMTg0LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdWODRIRUU2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5NzI3NDkwOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY3MTM1MjM0NTgyNDI6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXF6cjdvR0VMYlU4N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQa0hwa3lWdVNtNlFYSHJJb0Z4OEdySUZldzk5MlY4T0NsVEZpbjNLb213PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjExMXRzN3VhQzZBclo0Y2hVNHhTWUdBK3lTdGdlMHBFV3RlL0VaL0FXcWJVcW1qMll0SXRZenFTK3dRSnM3blROU3JEWldRZDltaVZnSTB6NjdQWUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1qcFRvaURDR0hSNzZkVmE3SU01bWtKRTAwbU5GRTBCeEhiNXNmZWh1QytWcDdBSkVhQ3dVUTQ4NnVWT0xldjlKVjZKMXkwSkhxenp4eVFLZjFZS0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzk3Mjc0OTA6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3ODUxMDY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Eliminator tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
