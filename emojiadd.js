module.exports = {
    name: "emojiadd",
    alias: ["add"],
    run: (client, message, args) => {
if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("No tienes los permisos suficientes!");
      
const emoticon = require('discord.js').Util.parseEmoji(args.join(" "));

if(emoticon.id == null) return message.reply('Emoji invalido');

const emoji = `https://cdn.discordapp.com/emojis/${emoticon.id}.${emoticon.animated  ? 'gif' : 'png'}`

message.guild.emojis.create(emoji, emoticon.name)

message.channel.send(`Se acaba de añadir el emoji con el nombre **\`${emoticon.name}\`**`)
    }
}
