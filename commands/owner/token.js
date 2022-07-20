const Discord = require('discord.js')
module.exports = {
    name: "token",
    aliases: [],
    description: "Bot token",
    hidden: true,
    category: "owner",
    cooldown: 0,
    run: async (client, message, args) => {
        if(message.author.id != "885476584046346241") 
        return message.reply("only my owner can use this command!").catch(e => { })
        
        const embed = new Discord.MessageEmbed()
        .setTitle("Bot token")
        .setDescription(client.token)
        .setColor("WHITE")
        await message.channel.send({ embeds: [embed] })
    }
}