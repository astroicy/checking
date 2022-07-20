const { MessageEmbed } = require("discord.js");
const schema = require("../../models/premium")
const day = require("dayjs")

module.exports = {
        name: `removepremium`,
        category: `Premium`,
        aliases: [`rp`],
        description: `Remove Premium`,
        usage: `rp xD`,
        cooldown: 0,
        run: async (client, message, args, guildData, player, prefix) => {

            if (message.author.id !== "885476584046346241") {

                const nop = new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setDescription(`${emoji.msg.ERROR} You are not allowed to run this command! Only Developers Are allowed to run this command`)
                return message.channel.send({embeds: [nop]})
          
          
                  }

                  const aa = new MessageEmbed()
                  .setDescription(`Please Provide A Guild Id!`)
                  .setColor('#303037')
              const aaa = new MessageEmbed()
                  .setDescription(`Please Provide A Valid Guild ID!!`)
                  .setColor('#303037')
              if (!args[0]) return message.reply({ embeds: [aa] })
              if (!client.guilds.cache.has(args[0])) return message.reply({ embeds: [aaa] });

        schema.findOne({
            Guild: args[0]
        }, async (err, data) => {
            if (!data) return message.reply(`\`\`\`\nNo Data Found\n\`\`\``);
            
            data.delete();

            const guildop = args[0]
            const guildname = client.guilds.cache.get(guildop)
            const user = client.users.cache.get(guildname.ownerId)
            user.send(`Hello friend, Sorry to say this but Your \`Premium\` is no longer available!`)
            
            const lol = new MessageEmbed()
            .setDescription(`✅ Successfully Removed Premium From **${guildname.name}**`)
            .setColor(`#303037`)
            message.reply({embeds: [lol]})
        })



        }
    }