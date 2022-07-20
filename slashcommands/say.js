const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Repeat What You Say.")
    .addStringOption((option) => 
        option
        .setName("message")
        .setDescription("Message To Repeat")
    ),
    
    async run(interaction, client) {
        await interaction.followUp({content: interaction.options.getString('message')})
    }
}