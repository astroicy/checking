const randomanime = require("random-anime");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'anime',
  description: 'Show You The Anime Girls :)',
  usage: `anime`,
  category: "nsfw",
  hidden: true,
  cooldown: 5,
  run: async (client, message, args) => {
    const anime = randomanime.anime()
    const embed = new MessageEmbed()
    .setTitle("Anime image")
    .setColor('WHITE')
    .setImage(anime)
    message.channel.send({embeds: [embed]});
  }
}