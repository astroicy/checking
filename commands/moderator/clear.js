const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "purge",
  aliases: ['clear'],
  description: "Remove some messages",
  category: "moderator",
  cooldown: 5,
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
        return message.channel.send(
            `You do not have correct permissions to do this action, ${message.author.username}`, // returns this message to user with no perms
        );
    }
    if (!args[0]) {
        return message.channel.send('Please enter a amount 1 to 100');
    }

    let deleteAmount = parseInt(args[0], 10);

    if (Number.isNaN(deleteAmount)) {
        return message.channel.send('Please enter a amount 1 to 100');
    }

    // could use ternary
    if (deleteAmount > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0], 10);
    }

    await message.channel.bulkDelete(deleteAmount, true);

    const embed = new MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(`successfully deleted ${deleteAmount}`)
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setColor('WHITE');
    return message.channel.send({embeds: [embed]});
    }
}