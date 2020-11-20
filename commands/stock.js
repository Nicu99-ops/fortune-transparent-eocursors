const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Omega™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`$spotify`: 0 .\n`$disney`: 0.\n`$hulu`: 0 .\n`$minecraft`: 0 .\n`$nordvpn`: 0\n`$steam 0`.\n`$origin` 0.\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
