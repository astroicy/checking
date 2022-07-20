const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    aliases: ["gayrate"],
    description: "Rate how gay is you : )",
    category: "fun",
    cooldown: 5,
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author

        const chance = Math.floor(Math.random() * 101)
        const embed = new Discord.MessageEmbed()
        .setTitle(`This is result!`)
        .setDescription(`<@${member.id}> is ${chance}% gay rate!`)
        .setFooter("Sorry if the rate is high : )")
        .setColor("WHITE")
        message.channel.send({ embeds: [embed] })
    }    
}