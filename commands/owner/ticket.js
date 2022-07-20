const Discord = require('discord.js')
const simplydjs = require('simply-djs')

module.exports = {
    name: "ticket",
    aliases: ["tick"],
    description: "Show commands info.",
    category: "owner",
    usage: "!ticket",
    cooldown: 1,
    hidden: true,
    run: async (client, message, args) => {
      if(message.author.id != "885476584046346241") 
      return message.reply("only my owner can use this command!").catch(e => { })
        const embed = new Discord.MessageEmbed()
        .setTitle("Ticket create!")
        .setDescription("Click the button below to create ticket")
        .setColor("WHITE")
        simplydjs.ticketSystem(message, message.channel, {
			embed: embed,
            embedColor: "WHITE",
            emoji: '🎫',
            color: 'SECONDARY',
            embedFoot: "Close ticket by click button below."
          })
        }
    }
