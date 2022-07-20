const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const randomanime = require("random-anime")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    
    async run(interaction, client) {
        await interaction.followUp({content: `Pong! \`${client.ws.ping}ms\``})
    }
}