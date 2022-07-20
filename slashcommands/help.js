const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get Slash Commands List."),
    
    async run(interaction, client) {
        const embed = new Discord.MessageEmbed()
        .setTitle(':robot: Here Are My Commands')
        .setDescription(
            '**boost - Show server boost level \n meme - Troll command \n ping - Pong! \n serverinfo - Get some help \n kick - Kick someone. \n ban - Ban Someone. \n say - Repeat What You Say. \n unban - Unban someone. \n whois - Show user info. \n avatar - Get User Avatar. \n timeout - Timeout Someone. \n howgay - Show user gay rate : )**')
        .setColor('WHITE')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        await interaction.followUp({embeds: [embed]})
    }
}