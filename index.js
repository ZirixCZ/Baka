const Discord = require("discord.js");
const Auth = require("./auth.json");
const bot = new Discord.Client({disableEveryone : true});

var prefix = Auth.prefix;

bot.on("ready", () => {
    console.log("ready, dont close IT AND GO FIND DA HOSTING");})

    let helpStatus = false;

        setInterval(() => {
            if (helpStatus = !helpStatus)
                bot.user.setActivity(".help for the list of Commands");
            else
                bot.user.setActivity("Created by Zirix & Mystery");
        }, 5000);

//#region No Dms    
bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    //NON SENSITIVE
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
    if(msg.startsWith(prefix + "HELP")){
        message.channel.send("How can i help you dear \n `info` `commands`");
    }
    if(msg.startsWith(prefix + "HELLO")){
        message.channel.send("Hello " + sender + " <3");
    }

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

});
//#endregion

bot.login(Auth.token);
