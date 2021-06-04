const Discord = require("discord.js")
const { Aleatorio } = require("mr.pajas2.0")

module.exports = {
  commands: ["howgay", "gay"],
  expectedArgs: "[@user || id]",
  permissionError: "",
  minArgs: 0,
  maxArgs: 1,
  callback: async (message, args, text, client) => {
      const user = message.mentions.members.first() || message.guild.members.cache.get(args.join(" ")) || message.member
    let random = Aleatorio(100, 0, 100, true)
    const embed = new Discord.MessageEmbed()
    .setTitle(`🏳️‍🌈 ${user.displayName} 🏳️‍🌈`)
    .setDescription(`**Tu eres ${random}% gay**`)
    .setColor('RANDOM')

    const messageToDelete = await message.channel.send(embed)

    Borrar(message, messageToDelete, 0); 
  },
  permissions: "",
  requiredRoles: [],
}
