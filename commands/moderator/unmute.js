const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "unmute",
    aliases: [],
    description: "Unmute someone.",
    category: "moderation",
    cooldown: 5,
    run: async (client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`<@${Member.id}> is now unmuted`)
    }
}