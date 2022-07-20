const { MessageEmbed } = require('discord.js');
const client = require('../../index')
const moment = require('moment');

module.exports = {
    name: "whois",
    aliases: ["userinfo"],
    description: "Get server info!",
    category: "utility",
    cooldown: 5,
    run: async (client, message, args) => {
        let member = message.mentions.members.last() || message.member;
        if(!member) {
          try {
            member = await message.guild.members.fetch(args[0])
          } catch {
            member = message.member;
          }
        }
            
        let rolesname;
        let roles = member.roles.cache
                .sort((a, b) => b.position - a.position)
                .map(role => role.toString())
                .slice(0, -1);
        
        rolesname = roles.join(" ")
        if(member.roles.cache.size < 1) rolesname = "No Roles"
        
        
        if(!member.roles.cache.size || member.roles.cache.size - 1 < 1) roles = `\`None\``
            const embed = new MessageEmbed()
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
            
              const embedOwner = new MessageEmbed()
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setColor(member.displayHexColor)
              .addFields([
                  {
                    name: ":crown: User",
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

              const embedPartner = new MessageEmbed()
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setColor(member.displayHexColor)
              .addFields([
                  {
                    name: ":handshake: User",
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
            
            if(message.author.id == "885476584046346241") return message.channel.send({ embeds: [embedOwner] })
            
            message.channel.send({embeds: [embed]});
        
            }
}