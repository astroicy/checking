const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: "trash",
    aliases: [""],
    description: "Trash Image Command!",
    category: "image",
    cooldown: 5,
    vote: true,
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author
        const avatar = member.displayAvatarURL({ format: "png", dynamic: true})
        const image = await canvacord.Canvas.trash(avatar)
        let attach = new Discord.MessageAttachment(image, "trash.png", )
        message.channel.send({files: [attach] })
    }    
}