const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Get User Avatar.")
    .addUserOption((option) => 
        option
        .setName("user")
        .setDescription("User to get avatar.")
        .setRequired(true)
    ),
    
    async run(interaction, client) {
        let user = interaction.options.getMember("user")
        const embed = new Discord.MessageEmbed()
        .setColor('000000')
        .setAuthor(user.user.tag, user.displayAvatarURL({dynamic: true}))
        .setDescription(`**[Avatar Link](${user.displayAvatarURL()})**`)
        .setImage(user.displayAvatarURL(
            {dynamic : true,
            format : 'png',
            size : 1024}))
        await interaction.followUp({embeds: [embed]})
    }
}