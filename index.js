const Discord = require("discord.js");
const Auth = require("./auth.json");
const colors = require("./colors.json");
const talkedRecently = new Set();
const bot = new Discord.Client({disableEveryone : true});
var prefix = Auth.prefix;
let helpStatus = false;

    setInterval(() => {
        if (helpStatus = !helpStatus)
            bot.user.setActivity(".help for the list of commands");
     else
        var creator = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        if(creator <= 50){
            bot.user.setActivity("Created by Zirix & Mystery");
        }
        if(creator > 50){
            bot.user.setActivity("Created by Mystery & Zirix");
        }
    }, 15000);


    bot.on("ready", () => {
        console.log("ready, dont close IT AND GO FIND DA HOSTING");})


//#region No Dms    
bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    //NON SENSITIVE
   /*if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait two secs before sending commands again..." + message.author); } 
        else 
    {talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id);}, 2000);
    return;
    }*/
    let msg = message.content.toUpperCase();
    let splitmsgup = msg.split(" ");
    let cont = splitmsgup[0];
    let argsup = splitmsgup.slice(1); 
    //SENSITIVE
    let messageArray = message.content.split(" ");  
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    // HI
    let sender = message.author;
    //COMMANDS

    //#region Help
    if(cont === prefix + ("HELP") || cont === prefix + ("WELP")){
        message.channel.send("there is your signpost, sir. \n `info` `commands`");
    }
    //#endregion

    //#region Hello
    if(cont === prefix + ("HELLO") || cont === prefix + ("HEY") || cont === prefix + ("HELLO BAKA") || cont === prefix + ("HEY BAKA") || cont === prefix + ("YO") || cont === prefix + ("YO BAKA")){
        message.channel.send("Hello " + sender + " <3");
    }
    //#endregion

    //#region Coinflip
    if(cont === prefix + "COINFLIP" || cont === prefix + "CF"){
            let coinflipresults = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            if(coinflipresults <= 50){
                message.channel.send("Heads!")
            }
            if(coinflipresults > 50){
                message.channel.send("Tails!")
            }
        }
        //#endregion
       
    //#region Ping
    if (cont === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

         message.channel.send('Pong!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.
    
    }
    //#endregion

    //#region RPS Rock Paper Scissors
        if(msg.startsWith(prefix + 'RPS')){
            let choice = "";
            for(var i = 0; i < args.length; i++){
                choice += argsup[i];
            }
            if(!choice){
                return message.channel.send("Please choose: `Rock/R` or `Paper/P` or `Scissors/S`");
            } 
            if(choice != 'R' && choice != 'P' && choice != 'S' && choice != 'ROCK' && choice != 'PAPER' && choice != 'SCISSORS'){
                return message.channel.send("I'm sorry, i couldn't understand what you chose");
            }
            // ROCK
            if(choice === "R" || choice === "ROCK"){
                let Botpick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                // 1 rock 2 paper 3 scissors
                if(Botpick == 1){
                    message.channel.send('You chose rock and i chose rock too!\nTie!');
                }
    
                if(Botpick == 2){
                    message.channel.send('You chose rock and i chose paper!\nI won!');
                }
    
                if(Botpick == 3){
                    message.channel.send('You chose rock and i chose scissors!\nYou won!');
                }
            }
            // PAPER
            if(choice === "P" || choice === "PAPER"){
                let Botpick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                // 1 rock 2 paper 3 scissors
                if(Botpick == 1){
                message.channel.send('You chose paper and i chose rock!\nYou won!');
                }
            
                if(Botpick == 2){
                    message.channel.send('You chose paper and i chose paper too!\nTie!');
                }
            
                if(Botpick == 3){
                    message.channel.send('You chose paper and i chose scissors!\nI won!');
                }
            }
            // SCISSORS
            if(choice === "S" || choice === "SCISSORS"){
                let Botpick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                // 1 rock 2 paper 3 sciccors
                if(Botpick == 1){
                    message.channel.send('You chose scissors and i chose rock!\nI won');
                    }
                
                    if(Botpick == 2){
                        message.channel.send('You chose scissors and i chose paper\nYou won');
                    }
                
                    if(Botpick == 3){
                        message.channel.send('You chose scissors and i chose scissors too!\nTie');
                    }
            }
        }
        //#endregion

    //#region Purge
        if (cont === prefix + 'PURGE') { // This time we have to use startsWith, since we will be adding a number to the end of the command.
            // We have to wrap this in an async since awaits only work in them.
            async function purge() {
                message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
    
                // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
                if (!message.member.roles.find("name", "Owner")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                    message.channel.send('You need the \`Owner\` role to use this command.'); // This tells the user in chat that they need the role.
                    return; // this returns the code, so the rest doesn't run.
                }
    
                // We want to check if the argument is a number
                if (isNaN(args[0])) {
                    // Sends a message to the channel.
                    message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                    // Cancels out of the script, so the rest doesn't run.
                    return;
                }
    
                const fetched = await message.channel.fetchMessages({ limit: args[0] }); // This grabs the last number(args) of messages in the channel.
                console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
    
                // Deleting the messages
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
    
            }
    
            // We want to make sure we call the function whenever the purge command is run.
            purge(); // Make sure this is inside the if(msg.startsWith)
        }
        //#endregion

    //#region Embed Server
     if (cont === prefix + ("SERVERINFO") || cont === prefix + ("INFO") || cont === prefix + ("SERVER")){
        let sEmbed = new Discord.RichEmbed()
        .setColor(colors.Cyan)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .addField("**Server Name:**", `${message.guild.name}` , true)
        .addField("**Server Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setFooter("Baka | Created By Zirix & Mystery", bot.user.displayAvatarURL)
        message.channel.send({embed: sEmbed})
    }
    //#endregion

    //#region Embed User
        if (cont === prefix + 'USERINFO'){
            let mentioned = message.mentions.members.first() || message.guild.members.get(args[0])  
            let mentions = "";
              
                          
            for(var i = 0; i < args.length; i++){
                mentions += args[i];
            }            
            if(mentions){
                let mentionedusername = message.guild.members.find(x => x.user.username.toLowerCase() === args[0].toLowerCase())
                if(!mentioned && !mentionedusername){
                    return message.channel.send("I'm sorry, i couldn't find who you are trying to check");
                }
    
                if(mentionedusername){
                    let uEmbed = new Discord.RichEmbed()
                    .setColor(colors.Cyan)
                    .setTitle(`Info about ${mentionedusername.user.username}`)
                    .setThumbnail(mentionedusername.user.displayAvatarURL)
                    .setAuthor(`${mentionedusername.user.username}`, mentionedusername.user.displayAvatarURL)
                    .addField("**Username:**", `${mentionedusername}`, true)
                    .addField("**Discriminator:**", `${mentionedusername.user.discriminator}`, true)                
                    .addField("**ID:**", `${mentionedusername.id}`, true)
                    .addField("**Status:**", `${mentionedusername.presence.status}`, true)
                    .addField("**Created At:**", `${mentionedusername.user.createdAt.toDateString() +", " + mentionedusername.user.createdAt.toLocaleString()}`, true)
                    .setFooter(`${bot.user.username} | Created By Zirix & Mystery`, bot.user.displayAvatarURL)
                    message.channel.send({embed: uEmbed})
                    return;
                }
            }
                                  
            if(!mentioned){
                let uEmbed = new Discord.RichEmbed()
                .setColor(colors.Cyan)
                .setTitle(`Info about ${message.author.username}`)
                .setThumbnail(message.author.displayAvatarURL)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
                .addField("**Username:**", `${message.author.username}`, true)
                .addField("**Discriminator:**", `${message.author.discriminator}`, true)
                .addField("**ID:**", `${message.author.id}`, true)
                .addField("**Status:**", `${message.author.presence.status}`, true)
                .addField("**Created At:**", `${message.author.createdAt.toDateString() +", "+ message.author.createdAt.toLocaleString()}`, true)
                .setFooter(`${bot.user.username} | Created By Zirix & Mystery`, bot.user.displayAvatarURL)
                message.channel.send({embed: uEmbed}) 
                return;  
            }
    
            if(mentioned){
                let uEmbed = new Discord.RichEmbed()
                .setColor(colors.Cyan)
                .setTitle(`Info about ${mentioned.user.username}`)
                .setThumbnail(mentioned.user.displayAvatarURL)
                .setAuthor(`${mentioned.user.username}`, mentioned.user.displayAvatarURL)
                .addField("**Username:**", `${mentioned.user.username}`, true)
                .addField("**Discriminator:**", `${mentioned.user.discriminator}`, true)
                .addField("**ID:**", `${mentioned.id}`, true)
                .addField("**Status:**", `${mentioned.user.presence.status}`, true)
                .addField("**Created At:**", `${mentioned.user.createdAt.toDateString() +", "+ mentioned.user.createdAt.toLocaleString()}`, true)
                .setFooter(`${bot.user.username} | Created By Zirix & Mystery`, bot.user.displayAvatarURL)
                message.channel.send({embed: uEmbed})   
                return;
            } 
            
            
                   
        }
        //#endregion

       
    //#region HELP
    if(cont === prefix + "COMMANDS" || cont === prefix + "COMMAND"){
        let hembed = new Discord.RichEmbed()
        .setColor(colors.Cyan)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription("**Note: All the commands are NOT cap sensitive**")
        .addField("**.Ping**", "Try it")
        .addField("**.Hello**", "Hey")
        .addField("**.Coinflip**", "Try out your luck")
        .addField("**.Purge**", "A command that only members with the right permissions can use to delete a huge amount of text")
        .addField("**.Randomnum/Rn**", "Get a random number between the range you write\nExample: `.rn 1 50`\nSecond Example: `.Randomnum 1 50`")
        .addField("**.Serverinfo**", "Check some information about the server")
        .addField("**.Userinfo**", "Check some information about a member in the server, or check yours. \nTo check yours do " + "`.Userinfo` \nand to check some else's information do " + "`.Userinfo <@User>`\n**Note: You don't have to ping the person**")
        .addField("**.Rollthedice**", "Roll the dice and get a random number between 1 - 6")
        .addField("**.Rps r/p/s**", "A game of rock paper scissors, start the command with `.Rps` and then choose Rock/r, Paper/r or Scissors/s \nExample: `.Rps Rock`\nSecond Example: `.Rps R`")
        message.channel.send(hembed);
    }
    //#endregion
    
    //#region User Generating Random Number
        if(cont === prefix + "RANDOMNUM" || cont === prefix + "RN"){
            let ranges = ""
            let afterranges = ""
            let aftermin = ""
            let min = args[0]
            let max = args[1]
            for(var i = 0; i < args.length; i++){
                ranges += args[i];
            }
            for(var i = 1; i < args.length; i++){
                aftermin += args[i];
            }
            for(var i = 2; i < args.length; i++){
                afterranges += args[i];
            }
            if(!ranges){
                return message.channel.send("Please write your range")
            }
            if(isNaN(min)){
                return message.channel.send("Please use only numbers")
            }
            if(isNaN(max)){
                return message.channel.send("Please use only numbers")
            }
            if(!aftermin){
                return message.channel.send("Please write the second number")
            }
            if(afterranges){
                return message.channel.send("Please write only two numbers")
            }       
            if(min > max){
                return message.channel.send("I don't think it works like that... Did you mean: !Randomnum " + max + " " + min)
            }
            message.channel.send(Math.floor(Math.random() * (+max - +min + 1)) + +min);
        }
        //#endregion
    
    //#region Roll The Dice
    if (cont === prefix + "ROLLTHEDICE"){
        message.channel.send(Math.floor(Math.random() * 6) + 1);
    }
    //#endregion











});
//#endregion

    bot.login(Auth.token);
