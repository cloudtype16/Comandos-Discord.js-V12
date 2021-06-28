const traductor = require("@k3rn31p4nic/google-translate-api")
const Discord = require('discord.js')

module.exports = {
    name: 'traductor',
    alias: ['trac'],
    run: (client, message, args) => { 
    const idioma = args[0]

    const texto = args.slice(1).join(" ")

    traductor(texto, {
        to: idioma
    }).then(res => {
        const embed = new Discord.MessageEmbed()
        .setTitle("`🌐` Traductor!")
        .setDescription(`Tu Texto: **__${texto}.__**\n\nTexto Traducido: **__${res.text}__**`)
        .setColor(client.config.color)
        .setFooter(`${message.author.id} - ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "jpg", size: 256}))

        message.lineReply(embed)
    })
  }
}
