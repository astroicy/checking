const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')

module.exports = {
    name: "avatar",
    aliases: ["useravatar"],
    description: "Show user avatar.",
    usage: "$avatar @user",
    category: "info",
    vote: true,
    cooldown: 5,
    run: async (client, message, args) => {
            let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
            const embed = new MessageEmbed()
            .setColor("WHITE")
            .setAuthor(`${user.username}#${user.discriminator}`,user.avatarURL())
            .setDescription(`**[Avatar Link](${user.avatarURL({ dynamic: true, format: 'png' })})**`)
            .setImage(user.avatarURL(
                {dynamic : true,
                format : 'png',
                size : 1024}))
            message.channel.send({embeds: [embed]})
  }
}