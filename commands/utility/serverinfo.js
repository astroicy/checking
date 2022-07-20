const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "serverinfo",
    aliases: [],
    description: "Get server info!",
    category: "utility",
    cooldown: 5,
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setTitle(`${message.guild.name}`)
        .setThumbnail()
        .setColor('WHITE')
        .addFields([
            {
                name: ':crown: Owner',
                value: `${interaction.guild.owner}`
            },
            {
                name: ':star: ID Server',
                value: `${guild.id}`
            },
            {
                name: ':calendar: Created',
                value: `${guild.createdAt.toLocaleString()}`
            },
            {
                name: ':busts_in_silhouette: Members',
                value: `${guild.memberCount}`
            },
            {
                name: ':speech_balloon: Channels',
                value: `${guild.channels.cache.size}`
            },
        ])
        .setTimestamp()
    message.channel.send({embeds: [embed]})
    }
}