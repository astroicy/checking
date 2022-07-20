const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const moment = require('moment')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("Get User Info.")
    .addUserOption((option) =>
        option
        .setName("user")
        .setDescription("Get User Info")
        .setRequired(true)
    ),
    
    async run(interaction, client) {
        let member = interaction.options.getMember("user")
        if(!member) {
          try {
            member = await interaction.guild.members.fetch(args[0])
          } catch {
            member = interaction.member;
          }
        }
            
        // Trim roles
        let rolesname;
        let roles = member.roles.cache
                .sort((a, b) => b.position - a.position)
                .map(role => role.toString())
                .slice(0, -1);
        
        rolesname = roles.join(" ")
        if(member.roles.cache.size < 1) rolesname = "No Roles"
        
        
        if(!member.roles.cache.size || member.roles.cache.size - 1 < 1) roles = `\`None\``
            const embed = new Discord.MessageEmbed()
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setColor(member.displayHexColor)
              .addFields([
                  {
                    name: "User",
                    value: `${member.user.username}#${member.user.discriminator}`
                  },
                  {
                      name: "ID",
                      value: `${member.id}`
                  },
                  {
                      name: "Created account",
                      value: `${moment(member.user.createdAt).format('MMMM Do YYYY, H:MM:SS A')}`                  
                  },
                  {
                      name: "Joined",
                      value: `${moment(member.joinedAt).format('MMMM Do YYYY, H:MM:SS A')}`
                  },
                  {
                      name: "Roles",
                      value: `[${roles.length || '0'}]: ${rolesname || `That user has no roles`}`
                  }
              ])
            
              const embedOwner = new Discord.MessageEmbed()
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setColor(member.displayHexColor)
              .addFields([
                  {
                    name: ":crown: User",
                    value: `${member.user.username}#${member.user.discriminator}`
                  },
                  {
                      name: ":crown: ID",
                      value: `${member.id}`
                  },
                  {
                      name: ":crown: Created account",
                      value: `${moment(member.user.createdAt).format('MMMM Do YYYY, H:MM:SS A')}`                  
                  },
                  {
                      name: ":crown: Joined",
                      value: `${moment(member.joinedAt).format('MMMM Do YYYY, H:MM:SS A')}`
                  },
                  {
                      name: ":crown: Roles",
                      value: `[${roles.length || '0'}]: ${rolesname || `That user has no roles`}`
                  }
              ])

              const embedPartner = new Discord.MessageEmbed()
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setColor(member.displayHexColor)
              .addFields([
                  {
                    name: ":handshake: User",
                    value: `${member.user.username}#${member.user.discriminator}`
                  },
                  {
                      name: ":handshake: ID",
                      value: `${member.id}`
                  },
                  {
                      name: ":handshake: Created account",
                      value: `${moment(member.user.createdAt).format('MMMM Do YYYY, H:MM:SS A')}`                  
                  },
                  {
                      name: ":handshake: Joined",
                      value: `${moment(member.joinedAt).format('MMMM Do YYYY, H:MM:SS A')}`
                  },
                  {
                      name: ":handshake: Roles",
                      value: `[${roles.length || '0'}]: ${rolesname || `That user has no roles`}`
                  }
              ])
            if(member.id == "885476584046346241") return interaction.followUp({ embeds: [embedOwner] })
        
            interaction.followUp({embeds: [embed]});
    }
}