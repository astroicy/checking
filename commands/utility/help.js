const Discord = require('discord.js');
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "help",
    aliases: ["cmds", "commands"],
    description: "Show commands info.",
    category: "utility",
    usage: "$help <command>",
    hidden: true,
    cooldown: 1,
    run: async (client, message, args) => {
      const row2 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
        .setCustomId("Hello")
        .setPlaceholder("Select")
        .addOptions([
          {
            label: "Home",
            description: "Go back to home.",
            value: "home",
            emoji: "🏠"
          },
          {
            label: "Commands",
            description: "Show bot commands!",
            value: "commandlist",
            emoji: "🤖"
          },
          {
            label: "Support",
            description: "Please support us : )",
            value: "support",
            emoji: "👍"
          }
        ])
      )
    
      if (!args[0]) {
        let categories = [];
        const ignorecategories = ['owner', 'nsfw']
        const emoji = {
          fun: "<:half_troll:930695043545694238>",
          utility: "🔨",
          moderator: "<:ban_hammer:930698689230553129>",
          image: "<:image:946750399648505947>",
          nsfw: ":underage:"
        }
  
        readdirSync("./commands/").forEach((dir) => {
          const editedName = `${emoji[dir]} ${dir.toUpperCase()}`
          if(ignorecategories.includes(dir)) return;
          const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
            file.endsWith(".js")
          );
  
          const cmds = commands.filter((command) => {
            let file = require(`../../commands/${dir}/${command}`)

            return!file.hidden;
          }).map((command) => {
            let file = require(`../../commands/${dir}/${command}`);
  
            if (!file.name) return "No command name.";
  
            let name = file.name.replace(".js", "");
  
            return `\`${name}\``;
          });
  
          let data = new Object();
  
          data = {
            name: editedName,
            value: cmds.length === 0 ? "Currently unavailable." : cmds.join(" "),
          };
  
          categories.push(data);
        });
  
        const embed2 = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setTitle(":wave: Sup, Boy Bot is here!")
        .setDescription(`If you want Bot Commands, just select \`Commands\` in dropdown menu`)
        .addFields([
          {
            name: "<:infowhite:946751356528635934> Help?",
            value: "Select \`Support\` in dropdown and join our community! Or you can use [Documentation](https://docs.boybot.ml/)."
          }
        ])
        const messagecon = await message.channel.send({embeds: [embed2], components: [row2], ephemeral: true});

        const Helpembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}, Here the commands!`)
        .addFields(categories)
        .setDescription(
          `Use \`<${prefix}command>\` to make all commands work. For example: \`${prefix}help\`.`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("WHITE");
        const SupportEmbed = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setTitle(`Support Boy Bot!`)
        .addFields([
          {
            name: "Vote",
            value: "<:discordbotlist:938813638679093288> [Vote Boy Bot on DBL.](https://discordbotlist.com/bots/boy-bot/upvote) \n <:topgg:938813640251940904> [Vote Boy Bot on top.gg](https://top.gg/bot/931158101959274546/vote)",
            inline: true
          },
          {
            name: "Community",
            value: "<:boybotround:938813965809619024> [Join now!](https://discord.com/invite/rr2N4UaHk2)",
            inline: true,
          }
        ])
        let filter = i => message.author.id == i.user.id
        const collector = message.channel.createMessageComponentCollector({
          filter,
          componentType: "SELECT_MENU",
          time: 60000
        })
        collector.on("collect", async (collected) => {
          const value = collected.values[0]

          if(value == "home"){
            collected.update({embeds: [embed2], ephemeral:true})
          }

          if(value === "commandlist"){
            collected.update({embeds: [Helpembed], ephemeral:true})
          } 
          if(value === "support") {
              collected.update({embeds: [SupportEmbed], ephemeral:true})
          }
        })
      } else {
        const command =
          client.commands.get(args[0].toLowerCase()) ||
          client.commands.find(
            (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
          );

        
        if (!command) {
          const embedfailed = new Discord.MessageEmbed()
            .setDescription(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
            .setColor("FF0000");
          return message.channel.send({embeds: [embedfailed]});
        }
  
        const Deatailembed = new Discord.MessageEmbed()
          .setTitle("Command Details:")
          .addField(
            "COMMAND:", command.name ? `\`${command.name}\`` : "No name for this command."
          )
          .addField(
            "ALIASES:", command.aliases
              ? `\`${command.aliases.join("` `")}\``
              : "No aliases for this command."
          )
          .addField(
            "USAGE:", command.usage
              ? `\`${prefix}${command.name} ${command.usage}\``
              : `\`${prefix}${command.name}\``
          )
          .addField(
            "DESCRIPTION:", command.description
              ? command.description
              : "No description for this command."
          )
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setColor("WHITE");
        return message.channel.send({embeds: [Deatailembed]});
    }
  }
}

