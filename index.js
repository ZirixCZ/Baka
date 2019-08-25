const Discord = require("discord.js");
const Token = require("./auth.json");
const bot = new Discord.Client({disableEveryone : true});
bot.on("ready", () => {
    console.log("ready, dont close IT AND GO FIND DA HOSTING");})

bot.on("message", message => {
     if (message[0] != ".")
         return;
            //commands will go here theoretically :DDD
    
    
        
});
