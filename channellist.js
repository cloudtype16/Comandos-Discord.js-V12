const Discord = require("discord.js");

module.exports = {
    name: "channellist",
    alias: ["canallist"],
    run: (client, message, args) => {
    if(message.guild.channels.size <= 0) return message.channel.send("<a:Nose:819313505689796609> **|** No hay canales.") 
    let no_categorias = new Array()
    let categorias = new Array() 
    function Ordenar(canal1, canal2) {
      if(canal2.tipo == "voice" && canal1.tipo != "voice") return -1
      return (canal1.tipo != "voice" || canal2.tipo == "voice") ? canal1.posicion - canal2.posicion : 1
    }
    message.guild.channels.cache.filter(f => f.type == "category").array().map(c => categorias.push({nombre: c.name, parseID: c.id, posicion: c.position, canales: []}))
    message.guild.channels.cache.filter(f => f.type != "category").array().map(c => {
      if(c.parent) { 
        let index = categorias.findIndex(h => h.parseID == c.parent.id) 
        if(index != -1) categorias[index].canales.push({nombre: c.name, posicion: c.position, tipo: c.type}) 
        return        
      }
      no_categorias.push({nombre: c.name, posicion: c.position, tipo: c.type}) 
    })
    let img_texto = "[💬]" 
    let img_categoria = "[🗂]" 
    let img_voz = "[🔊]" 
    let texto = "" 
    no_categorias.sort(Ordenar)  
    for(var canal of no_categorias) texto += canal.tipo == "text" ? `${img_texto} ${canal.nombre}\n` : `${img_voz} ${canal.nombre}\n` 
    if(categorias.length > 0) {
      categorias.sort(Ordenar) 
      for(var categoria of categorias) {
        texto += `${img_categoria} ${categoria.nombre}\n`
        categoria.canales.sort(Ordenar) 
        for(var canal of categoria.canales) texto += canal.tipo == "text" ? `    ${img_texto} ${canal.nombre}\n` : `    ${img_voz} ${canal.nombre}\n`      
      }
    }
    let embed = new Discord.MessageEmbed()
    .setColor("00FF15")
    .setDescription(texto.length > 0 ? "```"+texto+"```" : "No datos.")
    .setFooter(`Estructura del servidor ${message.guild.name}`,message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    return message.channel.send(embed)
 
  
    }
}
