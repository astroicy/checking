const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban someone.")
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
        .setDescription(`✅ **${member.user.tag} has been banned.**`)
        .setColor('RANDOM')
        .setTitle("Successfully")
        
        if (member.id === client.user.id)
        return interaction.followUp({content: `Please Don't ban Me :(`}).catch(err => console.log(err))
        
        if (interaction.guild.ownerId === member.user.id){ return interaction.followUp("I can't Banned the owner of the server!").catch(err => console.log(err))}
        
        if (!interaction.member.permissions.has(`BAN_MEMBERS`))
        return interaction.followUp(`You Don't have permission to use this command`).catch(err => console.log(err))
        
        if (!interaction.guild.me.permissions.has(`BAN_MEMBERS`))
        return interaction.followUp(`I Don't have permission to work this command`).catch(err => console.log(err))
        
        if (interaction.guild.me.roles.highest.position <= member.roles.highest.position){
            const embed3 = new Discord.MessageEmbed()
            .setDescription(`I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED')
            interaction.followUp({ embeds: [embed3] })
        }
        try {
            await interaction.guild.bans.create(member, {
                reason
            })
            return interaction.followUp({ embeds: [embed] })
        }
        catch(err){
            if (err){
            }
        }
    }
}