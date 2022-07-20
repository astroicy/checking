const randomanime = require("random-anime");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'hentai',
  description: 'Show you a really hot anime girls',
  usage: ``,
  category: "nsfw",
  cooldown: 5,
  run: async (client, message, args) => {
    const anime = randomanime.nsfw()
    const embed = new MessageEmbed()
    .setTitle("Anime image")
    .setColor('WHITE')
    .setImage(anime)
    const nonnsfw = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("This is not nsfw channel!")
    .setDescription("To enable, please enable it in chat setting")
    .setImage("https://cdn.discordapp.com/attachments/915180556680056838/948793865014480906/unknown.png")
    if(!message.channel.nsfw) return message.channel.send({ embeds: [nonnsfw] })
    message.channel.send({embeds: [embed]});
  }
}