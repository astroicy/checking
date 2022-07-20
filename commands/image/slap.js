const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: "slap",
    aliases: [""],
    description: "Slap Image Command!",
    category: "image",
    cooldown: 5,
    vote: true,
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author
        const avatar = member.displayAvatarURL({ format: "png", dynamic: true})
        const avatar1 = message.author.displayAvatarURL({ format: "png", dynamic: true })
        const image = await canvacord.Canvas.slap(avatar1, avatar)
        let attach = new Discord.MessageAttachment(image, "slap.png", )
        message.channel.send({files: [attach] })
    }    
}