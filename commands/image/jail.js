const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: "jail",
    aliases: [""],
    description: "Jail Image Command!",
    category: "image",
    cooldown: 5,
    vote: true,
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author
        const avatar = member.displayAvatarURL({ format: "png", dynamic: true})
        const image = await canvacord.Canvas.jail(avatar)
        let attach = new Discord.MessageAttachment(image, "jail.png", )
        message.channel.send({files: [attach] })
    }    
}