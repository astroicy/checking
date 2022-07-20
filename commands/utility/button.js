const Discord = require('discord.js')

module.exports = {
    name: "button",
    aliases: ["bt"],
    description: "Show commands info.",
    category: "utility",
    hidden: true,
    usage: "$button",
    cooldown: 1,
    run: async (client, message, args) => {
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId("test")
            .setStyle("PRIMARY")
            .setLabel("Hellos")
            .setDisabled(false)
        )
        const embed = new Discord.MessageEmbed()
        .setDescription("Reaction Roles")
        .setTitle("To get roles, click/press the buttons below.")
        const messagebruh = await message.channel.send({ content: "Hello!", components: [row] })

        let filter = i => i.user.id == message.author.id
        const collector = messagebruh.createMessageComponentCollector({
          filter,
          time: 60000
        })
        collector.on("collect", async (btn) => {
            if(btn.isButton()){
                if(btn.customId == "test"){
                    await btn.deferUpdate().catch(e => {  })
                    messagebruh.edit({content: "Huh."})
                }
            }
        })
        }
    }
