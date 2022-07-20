const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "unban",
    aliases: [''],
    description: "Unban someone",
    category: "moderator",
    cooldown: 5,
    run: async (client, message, args) => {
    if (!message.member.permissions.has('BAN_MEMBERS'))
    return message.reply(`<:Crossmark:930711118039621632> You Don't have permission for use this command`).catch(err => message.channel.send(`Error: Missing permission`));

    if (!message.guild.me.permissions.has('BAN_MEMBERS'))
    return message.reply(`<:Crossmark:930711118039621632> I Don't have permission for work this command`).catch(err => message.channel.send(`Error: Missing permission`));

    let userid = args[0];
    if(!userid) {return message.reply(`<:Crossmark:930711118039621632> Please give me the id for unban`).catch(err => message.channel.send(`Error: Missing permission`))};

    if (userid === message.author.id) return message.reply(`<:Crossmark:930711118039621632> You can't unbanned you own self!`).catch(err => message.channel.send(`Error: Missing permission`));

    let unban = await message.guild.bans.fetch();
        await message.guild.members.unban(userid).catch(err => message.channel.send(`Already unban or incorrect id.`));
        let embed = new MessageEmbed()
        .setDescription(`:white_check_mark: **Successfully unbanned user.**`)
        .setColor(`GREEN`)
        message.channel.send({ embeds : [embed]}).catch(err => message.channel.send(`Error: Missing permission`));
    }
}
