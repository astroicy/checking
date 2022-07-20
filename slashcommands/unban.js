const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unban someone.")
    .addStringOption((option) => 
        option
        .setName("id")
        .setDescription("User ID to unban.")
        .setRequired(true)
),
    
    async run(interaction, client) {
        const user = interaction.options.getString("id")
        if (!interaction.member.permissions.has(`BAN_MEMBERS`))
        return interaction.followUp(`You Don't have permission to use this command`).catch(err => console.log(err))
        
        if (!interaction.guild.me.permissions.has(`BAN_MEMBERS`))
        return interaction.followUp(`I Don't have permission to work this command`).catch(err => console.log(err))

        try { 
          interaction.guild.members.unban(user)
          interaction.followUp({ content: `Successfully unbanned ${user.user.tag}` }) 
        }
        catch(err){
          interaction.followUp({ content: "Please enter a valid banned UserID" })
        }
    }
}