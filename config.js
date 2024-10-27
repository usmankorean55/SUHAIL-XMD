const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923014077187";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923014077187,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_39_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejc2V1RhKzZLUWFxVkdKL0g2SGZoOXM2cXhGZUxQdTFBaHNtUUtzSlZHQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTQwNzcxODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjExMzI2Mjk2OUU5Qzc5NTZCOEFFQjM3ODM4NDdBQTdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTk0NjM3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2aGhjVTBsaFRRT2pMdWJZdVpFTy1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxNTZmNDgxLTM2YmMtNGY3OC04MmFlLTU1NzVjNzVjZmIwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDU2LFxuICAgICAgMjA3LFxuICAgICAgMTExLFxuICAgICAgMjI5LFxuICAgICAgMTg4LFxuICAgICAgMzAsXG4gICAgICAxMyxcbiAgICAgIDE1MyxcbiAgICAgIDIyNCxcbiAgICAgIDIwMyxcbiAgICAgIDk1LFxuICAgICAgMjIwLFxuICAgICAgMTAzLFxuICAgICAgMTQwLFxuICAgICAgMTQ4LFxuICAgICAgMTk5LFxuICAgICAgNzgsXG4gICAgICA1MCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTU4LFxuICAgICAgNyxcbiAgICAgIDM1LFxuICAgICAgMTU2LFxuICAgICAgOTQsXG4gICAgICAxNDUsXG4gICAgICA4NixcbiAgICAgIDg3LFxuICAgICAgNzUsXG4gICAgICAzNyxcbiAgICAgIDEyNixcbiAgICAgIDEyMSxcbiAgICAgIDEwNyxcbiAgICAgIDg3LFxuICAgICAgMSxcbiAgICAgIDIyNSxcbiAgICAgIDIyOCxcbiAgICAgIDM3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZCUjg2S0ZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTQwNzcxODc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMzNjU5MjIzMjU3MTExOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBjMGZRRUVQakY4N2dHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnWWI0eEJnQU9oWjhIMVZSKzFSaysxdTdKMndDOFkzT2JEZCtPYVQzL1JnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNEbDRnNlJkdjNaWFQwZXFCZ0xhNjIxOVdubU10Q2tvbG9GbUJzMmxNWFprcUF3YVhkUzZBTGozV0JQaUlqVGxuUDA3UkJyK050bWgwamNJbE53N0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImltTlUvSGlmTTlDdWJJMG90WUoxL0dlYTNWcmQwUlpmMS9WTWluWEQzYnk1YlNreTZzQ09FVWU3QkRJYnNZeVZteHhJd2Z0R3FuRmZmdDlFZHhxcGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAxNDA3NzE4Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk5NDYzNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtRYy5qc29uIjogIntcImtleURhdGFcIjpcInE4ZnltRG1HZFoxMlBSWnRZRmZrZnovVUM1eTVSSUVlVXNyQ00vdG5MSlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxODM1MDM1NCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝐔𝐒𝐌𝐀𝐍 𝐁𝐇𝐀𝐓𝐓𝐈",


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
