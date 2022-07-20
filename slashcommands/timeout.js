const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const ms = require('ms')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout someone.")
    .addUserOption((option) => 
        option
        .setName("user")
        .setDescription("User to get timeout.")
        .setRequired(true)
    )
    .addStringOption((option) => 
        option
        .setName("time")
        .setDescription("Time to get timeout.")
        .setRequired(true)
    )
    .addStringOption((option) => 
        option
        .setName("reason")
        .setDescription("Reason why that user got timeout")
        .setRequired(false)
    ),
    
    async run(interaction, client) {
        const user = interaction.options.getMember("user")
        const time = interaction.options.getString("time")
        const reason = interaction.options.getString("reason")
        const member = interaction.guild.members.cache.get(user.id)

        const timeInMS = ms(time)
        if(!timeInMS) return interaction.followUp({content: 'Please put a valid time!'})
        if (!interaction.member.permissions.has(`MANAGE_MESSAGES`))
        return interaction.followUp(`You Don't have permission to use this command`).catch(err => console.log(err))
        if (!interaction.guild.me.permissions.has(`MANAGE_MESSAGES`))
        return interaction.followUp(`I Don't have permission to work this command`).catch(err => console.log(err))
        if (interaction.guild.me.roles.highest.position <= member.roles.highest.position){
            const embed3 = new Discord.MessageEmbed()
            .setDescription(`I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED')
            interaction.followUp({ embeds: [embed3] })
        }
        try {
            await member.timeout(timeInMS, reason)
            return interaction.followUp({content: `Successfully timeout ${user} in ${time} with reason: ${reason || `No Reason.`}`})
        }
        catch(err){
            if (err){
            }
        }
    }
}