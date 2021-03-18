const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    alias: ['av'],
    run: (client, message, args) => { 
        const miembro = message.mentions.members.first() || message.guild.members.cache.get(args.join(" ")) || message.member;
        const embed = new Discord.MessageEmbed()
        .setDescription(`Avatar de: <@${miembro.user.id}>`)
        .setImage(miembro.user.displayAvatarURL({ dynamic: true, format: "jpg", size: 256}))
        .setFooter(`Ejecutador: ${message.author.username}`)
        .setColor("BLACK")
        return message.channel.send(embed)
    }
}
