module.exports = {
    name: "8ball",
    alias: ["8b"],
    run: (client, message, args) => {
        if(message.author.bot) return;
        const Discord = require("discord.js")
        const respuestas = [
          //////////tu-le-puedes-agregar-mas-respuestas/////
            "Sí",
            "No",
            "Tal vez",
            "No sé",
            "¡Claro!", 
            "Por supuesto", 
            " Por supuesto que no", 
            "Claro que no", 
            "Definitivamente"];

let pregunta = args.join(" ") 
let result = Math.floor((Math.random() * respuestas.length));


if (!args[0])
return message.channel.send(`Debes escribir una pregunta.`); 

const embed = new Discord.MessageEmbed() 
.addField("🎱 **|** Pregunta",`${pregunta}`)
.addField("Respuesta", respuestas[result])
.setColor('BLACK')

message.channel.send(embed)
    }
}
