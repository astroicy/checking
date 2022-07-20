const randomanime = require('random-anime')
const {MessageEmbed} = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "meme",
    aliases: ["troll"],
    description: "Funny 🐸",
    category: "fun",
    cooldown: 3,
    run: async (client, message, args) => {
      const res = await axios.default.get(`https://www.reddit.com/r/memes/random/.json`)
      if(!res || !res.data || !res.data.length)
      await console.log('An error occured')
      e = res.data[0].data.children[0].data
      const embed = new MessageEmbed()
      .setTitle(e.title)
      .setImage(e.url)
      .setColor('#000000')
      .setURL(`https://www.reddit.com${e.permalink}`)
      .setFooter(`👍${e.ups} 💬${e.num_comments}`)
    message.channel.send({embeds: [embed]})
 }
}