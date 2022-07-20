const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("boost")
    .setDescription("Show server boost level"),
    async run(interaction, client) {
        let level = interaction.guild.premiumTier === 0 ? "No Level" : `${interaction.guild.premiumTier}`;
        let boost = interaction.guild.premiumSubscriptionCount;
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Boost of ${interaction.guild.name}`)
        .addField("Boost", `${boost}`)
        .addField("Level", `${level}`)
        .setColor("#e700ff")
        await interaction.followUp({embeds: [embed]})
    }
}