const discord = require("discord.js");
const config = require("../config.json");
const premiumGuildSchema = require('../models/premium')
module.exports = async (client, message) => {

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      const row = new discord.MessageActionRow()
			.addComponents(
				new discord.MessageButton()
                .setStyle("LINK")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
                .setLabel("Invite!"),
			);
      const embed = new discord.MessageEmbed()
          .setTitle(`Boy Bot is here!`)
          .setDescription(`Hey **${message.author.username},**

          Bot Prefix: ${config.prefix}
          To See All Commands,  Type "${config.prefix}help"
          `)
          .setColor("#FFFFFF")
          .setThumbnail(client.user.displayAvatarURL())
  
      return message.reply({embeds: [embed], components: [row]})}
    if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type === 'dm') return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmda = args.shift().toLowerCase();
    let command = client.commands.get(cmda) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmda));
    if (!command) return;
    if(command.vote) {
            const embedvote = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle("❌ You haven't vote for bot!")
            .setDescription("To vote, click the button below.")
            const button = new discord.MessageButton()
            .setLabel("Vote now!")
            .setStyle("LINK")
            .setURL("https://top.gg/bot/931158101959274546/vote")
            const row = new discord.MessageActionRow({ components: [button] })
    
            let voted = await client.topgg.hasVoted(message.author.id)
            if(!voted) return message.channel.send({ embeds: [embedvote], components: [row] })
    }
    const noprem = new discord.MessageEmbed()
    .setColor("#303037")
    .setTitle(`❗ | Premium Only Command`)
    .setDescription(`This Is A Premium Only Command! [Join our server To Buy!](https://discord.gg/rr2N4UaHk2)`)
    const premexpire = new discord.MessageEmbed()
    .setColor("#303037")
    .setDescription(`❗ | Your Premium Is Expired! [Join our server To Buy!](https://discord.gg/rr2N4UaHk2)`)
         if(command.premium) {
          const data = await premiumGuildSchema.findOne({ Guild: message.guild.id })

          if(!data) return message.reply({ embeds: [noprem] })
          if(!data.Permanent && Date.now() > data.Expire){
            data.delete()
            return message.reply({embeds: [premexpire]})
          }
          }

    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new discord.Collection());
    }

    let now = Date.now();
    let timeStamp = client.cooldowns.get(command.name) || new Collection();
    let cool = command.cooldown || 5;
    let userCool = timeStamp.get(message.author.id) || 0;
    let estimated = userCool + cool * 1000 - now;

    if (userCool && estimated > 0) {
        let cool = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Please wait ${( estimated / 1000 ).toFixed()}s more before reusing the ${command.name} command.`)
        return (await message.reply({ embeds: [cool] }).catch(e => { })
            .then(msg => { setTimeout(() => msg.delete().catch(() => null), estimated) })
        )
    }

    timeStamp.set(message.author.id, now);
    client.cooldowns.set(command.name, timeStamp);
    try {
        command.run(client, message, args)
    } catch (error) {
        message.reply({ content: `there was an error trying to execute that command!` }).catch(e => { })
    }
};
