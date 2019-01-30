const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "C!"

client.login(process.env.TOKEN);

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Faire passer des captchas")

});

client.on('message', async message => {

if(message.content === "erzrezrezrzerezrezrezrze"){
    message.reply("Salut")
    console.log("Le bot dit bonjour")
}

if(message.content === prefix + "rzrerzrezrezrzerezrezrezrerez") {
    var aide_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Comment m'avoir ?")
    .setDescription("Pour m'avoire il faut juste quelque prérequis : 1 creer un role qui s'intitule 'Valider' , 2 : mettre le role du bot au-dessu du grade , 3 : creer une catégorie ou tous le monde a le droit de voir sauf le everyone , indiquer la commande ' C!captcha au membre , Creer un salon nommé 'captcha' et le tour est jouer D: ensuite tu m'ajoute : https://discordapp.com/oauth2/authorize?client_id=537669226194927628&scope=bot&permissions=2146958847")
    .setThumbnail(message.author.avatarURL)
    .setFooter("Captcha Bot - comment m'avoir ")
    .setTimestamp()
    message.channel.send(aide_embed);
  }

if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {

    case "captcha":

    var stats_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Captcha :")
    .setDescription("Pourquoi un captcha : Il y a un captcha pour bloquer les spams , ses spams seron bloqué car la sa ne sera pas dans tous le serveur :)")
    .addField("le captcha bah : https://cdn.discordapp.com/attachments/537691551984517140/537693548854640660/pass.png", " D:")
    .addField(" un petit don ?", "[Clique ici pour être redirigé](https://www.paypal.me/sysy242)")
    message.author.send(stats_embed);

    break;

}

if(message.content === prefix + "§S/9*32#") {

    let role = message.guild.roles.find("name", "Valider");

    if(message.member.roles.find("name", "Valider"));
    else {
        message.member.addRole(role)
        message .reply("Voila , tu a passé le captcha")
    }

}

});
