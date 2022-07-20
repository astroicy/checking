const Discord = require('discord.js')
const canvacord = require("canvacord")

module.exports = {
    name: "trigger",
    aliases: [""],
    description: "Trigger Command!",
    category: "image",
    cooldown: 5,
    vote: true,
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author
        const avatar = member.displayAvatarURL({ dynamic: true,format: 'png' })
        const image = await canvacord.Canvas.trigger(avatar)
        let attach = new Discord.MessageAttachment(image, "trigger.gif", )
        message.channel.send({ files: [attach] })
    }    
}