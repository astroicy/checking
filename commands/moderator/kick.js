const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "kick",
    aliases: [],
    description: "Kick!",
    category: "moderation",
    cooldown: 5,
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member;

        if (!message.member.permissions.has('KICK_MEMBERS'))
        return message.reply(`You Don't have permission for use this command`).catch(err => console.log(err))
    
        if (!message.guild.me.permissions.has('KICK_MEMBERS'))
        return message.reply(`I Don't have permission for work this command`).catch(err => console.log(err))
      
        const user = message.mentions.members.first()
        if (!user) { return message.reply('Please Tag a Valid User!').catch(err => console.log(err))}

        if (user.id === message.author.id)
        return message.reply(`You can't kick your own self!`).catch(err => console.log(err))
        if (user.id === client.user.id)
        return message.reply(`Please Don't Kick Me :(`).catch(err => console.log(err))

        if (message.guild.ownerId === member.user.id){ return message.reply("I can't Kicked the owner of the server!").catch(err => console.log(err))}

        if (message.guild.me.roles.highest.position <= member.roles.highest.position){
            const embed3 = new MessageEmbed()
            .setDescription(`I don't have high enough in the role hierarchy to do that.`)
            .setColor('RED') 
            return message.reply({ embeds : [embed3]}).catch(err => console.log(err))}
    
        let Reason = args.slice(1).join(" ")
        if (!Reason) { return message.reply('Please give any reason!').catch(err => console.log(err))};

        if (user) {
            user.kick().then(() => {
                let embed = new MessageEmbed()
                .setDescription(`✅ **${member.user.tag} has been kicked**`)
                .setColor('RANDOM') 
                message.channel.send({ embeds : [embed]}).catch(err => console.log(err))
                let embed2 = new MessageEmbed()
                .setDescription(`You were kicked from ${message.guild.name} for: ${Reason}`)
                .setColor(`RED`)
                user.send({ embeds : [embed2]}).catch(err => console.log(err))
            })
        } else {
            message.channel.send('cant find user!').catch(err => console.log(err))
        }

    }
}