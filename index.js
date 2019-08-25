const Discord = require("discord.js");
const Auth = require("./auth.json");
const bot = new Discord.Client({disableEveryone : true});

var prefix = Auth.prefix;

bot.on("ready", () => {
    console.log("ready, dont close IT AND GO FIND DA HOSTING");})


//#region No Dms    
bot.on("message", message => {
    const msg = message.content.toUpperCase();
    if(msg === prefix + "HELLO"){
        message.reply("Hello :)");
    }
        
});
//#endregion

bot.login(Auth.token);
