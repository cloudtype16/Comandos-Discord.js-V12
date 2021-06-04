const Discord = require("discord.js")
    
module.exports = {
    name: 'iconserver',
    alias: ['icon'],
    run: (client, message, args) => { 
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Icon de ${message.guild.name}`, message.guild.iconURL({ dynamic: true, format: "jpg", size: 256}))
        .setDescription(`[**Click Descarga**](${message.guild.iconURL({ dynamic: true, format: "jpg", size: 256})})`)
        .setImage(message.guild.iconURL({ dynamic: true, format: "jpg", size: 256}))
        .setColor(client.config.color)
        .setFooter(`Ejecutado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "jpg", size: 256}))
    
        message.channel.send(embed)
    
      }
    }
