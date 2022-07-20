const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const randomanime = require("random-anime")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Get server info."),
    
    async run(interaction, client) {
        const guild = interaction.guild
        const embed = new Discord.MessageEmbed()
        .setTitle(`${interaction.guild.name}`)
        .setThumbnail(client.user.avatarURL())
        .setColor('WHITE')
        .addFields([
            {
                name: ':crown: Owner',
                value: `<@${guild.ownerId}>`
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
        await interaction.followUp({embeds: [embed]})
    }
}