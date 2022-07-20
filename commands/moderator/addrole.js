const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "addrole",
    aliases: [],
    description: "Unmute someone.",
    category: "moderation",
    cooldown: 5,
    run: async (client, message, args) => {
        if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("I don't have permission to run this command!")
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You Don't have permission for use this command")
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('Please mention a member!')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('Please mention a role!')
        await target.roles.add(role)
        message.channel.send(`<@${target.id}> is now a <@&${role.id}>`)
    }
}