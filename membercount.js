module.exports = {
    name: "membercount",
    alias: [],
    run: (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`Miembros Totales: \`${message.guild.memberCount}\``)
    
    message.channel.send(embed);   
    }
}
