const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763843127";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_51_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm92YUNYbHZNZFJRbVlaUlRWNVdaN3EvOHhnbVpoaXIxOEEzT0hIZnJTZnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjM4NDMxMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYxRUNFNjFGRTlGODc1NENBQUVGMzk1MTM5QTVFRDg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTgyMzg3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYzODQzMTI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMEIzNDRBMjE0M0Y5QjZDOTNDODYwODIwMTI2NEI4NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4MjM4NzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3h2VTNRam1TWi0zdWRiQlhYSkVDZ1wiLFxuICBcInBob25lSWRcIjogXCJkYWU1ZTZlZi05Mzk4LTRkNmYtYmIzZC1kZjZmMWJiYTk4N2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgNDMsXG4gICAgICAxMTcsXG4gICAgICAxODEsXG4gICAgICAxNTAsXG4gICAgICAxNTQsXG4gICAgICAyMTYsXG4gICAgICAxODIsXG4gICAgICAxNTAsXG4gICAgICAxNzYsXG4gICAgICAyMyxcbiAgICAgIDEyNixcbiAgICAgIDIzMCxcbiAgICAgIDYzLFxuICAgICAgMjE5LFxuICAgICAgMTUxLFxuICAgICAgMjcsXG4gICAgICAxMzMsXG4gICAgICAyMjIsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyMDksXG4gICAgICAxNjgsXG4gICAgICAyMTYsXG4gICAgICAxMTcsXG4gICAgICAxMDEsXG4gICAgICAxOCxcbiAgICAgIDE5NixcbiAgICAgIDEzNSxcbiAgICAgIDE3LFxuICAgICAgMTIwLFxuICAgICAgMTgwLFxuICAgICAgODIsXG4gICAgICA2MyxcbiAgICAgIDE3NSxcbiAgICAgIDE2OSxcbiAgICAgIDU2LFxuICAgICAgODMsXG4gICAgICAxNDcsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlpZM1lNQUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYzODQzMTI3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMjIwMTc2Nzk4MTA3OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlByaXlhbnRoYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tETmxOWURFUHZiaWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielRaSHk5RUVjT2JUUS9xK1p5ZU9lektiMERpdFBGTG1hcXlVQXdmcHVBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkSVYwQ25wU0FNRXFZTUF6Z3RZS2M0NkorTVRaMmxsVXlLcXJmSk0yV0N6REloNk02QVphV0h0N1BuOEF0V2tpYUpuOVVWRWZCWFNpWHhTeExwQ1lDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLSUNpZndVWFNwNlFnaTVFdEF4cFc4OGRQZ2E3VWI2enBldTRzWTFKa2VxenBYdVZLK29KY2t4b2d1MzdWVnRiK3FUbW05WU9kMnY2SWUvRFZHdUdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Mzg0MzEyNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4MjM4NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBWDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFYNi5qc29uIjogIntcImtleURhdGFcIjpcIk1KT2dTSDIwS0dNL0dpelMrVy9GMDcyY3cvNWJqSUVpSFNBZk1aU2gvbzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg1OTk5MDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4MjM4NzE1MzRcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
