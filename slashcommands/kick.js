const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick someone.")
    .addUserOption((option) => 
        option
        .setName("user")
        .setDescription("User to get banned.")
        .setRequired(true)
    )
    .addStringOption((option) => 
        option
        .setName("reason")
        .setDescription("Reason to get banned.")
        .setRequired(false)
),
    
    async run(interaction, client) {
        let member = interaction.options.getMember("user")
        let reason = interaction.options.getString("reason") || "No reason given"
    
        if (!member) return interaction.followUp("Invalid member")
        const embed = new Discord.MessageEmbed()
        .setDescription(`✅ **${member.user.tag} has been kicked.**`)
        .setColor('GREEN')
        .setTitle("Successfully")
        
        if (member.id === client.user.id)
        return interaction.followUp({content: `Please Don't ban Me :(`}).catch(err => console.log(err))
        
        if (interaction.guild.ownerId === member.user.id){ return interaction.followUp("I can't Kicked the owner of the server!").catch(err => console.log(err))}
        
        if (!interaction.member.permissions.has(`KICK_MEMBERS`))
        return interaction.followUp(`You Don't have permission to use this command`).catch(err => console.log(err))
        
        if (!interaction.guild.me.permissions.has(`KICK_MEMBERS`))
        return interaction.followUp(`I Don't have permission to work this command`).catch(err => console.log(err))
        
        if (interaction.guild.me.roles.highest.position <= member.roles.highest.position){
            const embed3 = new Discord.MessageEmbed()
            .setDescription(`I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED')
            interaction.followUp({ embeds: [embed3] })
        }
        try {
            await interaction.guild.members.kick(member, reason)
            return interaction.followUp(`${member.user.tag} has been kicked out for ${reason}`)
        }
        catch(err){
            if (err){
            }
        }
    }
}