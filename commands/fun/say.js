const randomanime = require('random-anime')
const {MessageEmbed} = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "say",
    aliases: ["repeat"],
    description: "Repeat What You Say",
    category: "fun",
    cooldown: 3,
    run: async (client, message, args) => {
      const content = args.join(" ")
      if(!content) return message.reply('Please Type Something To Let Me Repeat!')
    message.channel.send({content: content})
  }
}