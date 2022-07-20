const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "boost",
    aliases: ["nitrobooster"],
    description: "Show server boost stat.",
    category: "utility",
    cooldown: 5,
    run: async (client, message, args) => {
        if(message.author.bot || !message.guild) return message.reply("this command for server only")
 
        let level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`;
        let boost = message.guild.premiumSubscriptionCount;
        
        let embed = new MessageEmbed()
        .setTitle(`Boost of ${message.guild.name}`)
        .addField("Boost", `${boost}`)
        .addField("Level", `${level}`)
        .setColor("#e700ff")
        message.channel.send({embeds: [embed]})
  }
}