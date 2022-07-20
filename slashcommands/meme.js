const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const axios = require('axios')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Troll command"),
    
    async run(interaction, client) {
        const res = await axios.default.get(`https://www.reddit.com/r/memes/random/.json`)
        if(!res || !res.data || !res.data.length)
        await interaction.followUp({content: 'An error occured'})
        e = res.data[0].data.children[0].data
        const embed = new Discord.MessageEmbed()
        .setTitle(e.title)
        .setImage(e.url)
        .setColor('#000000')
        .setURL(`https://www.reddit.com${e.permalink}`)
        .setFooter(`👍${e.ups} 💬${e.num_comments}`)
        await interaction.followUp({embeds: [embed]})
    }
}