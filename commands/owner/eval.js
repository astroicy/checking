const Discord = require('discord.js')
const { inspect } = require('util')
module.exports = {
    name: "eval",
    aliases: [],
    description: "Excute Some Script",
    hidden: true,
    category: "owner",
    cooldown: 0,
    run: async (client, message, args) => {
        if(message.author.id != "885476584046346241") 
        return message.reply("only my owner can use this command!").catch(e => { })

        const command = args.join(" ");
        if(!command) return message.reply({allowedMentions : { repliedUser : false }, content: "You need provide a command!"}).catch(e => { })

        try {
            const evaled = eval(command)
            const embed = new Discord.MessageEmbed()
            .setColor("WHITE")
            .addField("**📥 Input**", `\`\`\`js\n${command}\`\`\``)
            .addField("**📤 Output**", `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
            message.reply({allowedMentions : { repliedUser : false }, embeds: [embed] })
        } catch (error) {
            const embedfailure = new Discord.MessageEmbed()
            .setColor("RED")
            .addField(`📥 **Input**`, `\`\`\`js\n${command}\`\`\``)
            .addField(`⚠ **Error**`, `\`\`\`js\n${error}\`\`\` `)
            message.reply({allowedMentions : { repliedUser : false }, embeds: [embedfailure ] }).catch(e => { })
        }
    }
}