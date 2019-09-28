    const Discord = require('discord.js');

const client = new Discord.Client();

const triesPerSecond = 1;

const prefix = "!"

client.on('ready', () => {

    console.log("Je suis co");
    client.user.setActivity("a")
});

client.on('message', message => {
    if (message.content = "!protect on") {
    setInterval(message.guild.channels.map(m => m.send("Go https://discord.gg/YPg9vrm ")) , 500  ) 
    }
});



client.login(process.env.TOKEN)
