const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "unlock",
    aliases: [],
    description: "Unmute someone.",
    category: "moderation",
    cooldown: 5,
    run: async (client, message, args) => {
        if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.channel.send("I don't have permission to run this command!")
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You Don't have permission for use this command")
        
        let channel = message.mentions.channels.first() || message.channel;
        let check = channel.permissionsFor(message.guild.roles.everyone).has("SEND_MESSAGES");

        if(check){return message.reply(`❌ ${channel} Is Not Locked!`)}
        
        channel.permissionOverwrites.edit(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        .then(() => {
            message.channel.send(`:white_check_mark: ${channel} Is Unlocked!`)
        })
    }
}