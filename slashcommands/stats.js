const discord = require('discord.js');
const timezone = require("moment-timezone");
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");
const os = require("node:os");
const packageJson = require("../package.json");
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Get bot stats."),
    async run(interaction, client) {

        try {
            const duration = moment.duration(client.uptime).format("**D [D], H [H], m [M], s [S]**");

            const embed = new discord.MessageEmbed()
                .setTitle(`⚙ • System Statistics`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor("WHITE")
                .setDescription(`
\`\`\`asciidoc
• Platform - Arch     : ${process.platform} - ${process.arch}
• Bot Uptime          : ${duration}
• Memory Usage        : ${formatBytes(process.memoryUsage.rss())}
• Process Uptime      : ${ms(Math.round(process.uptime() * 1000), { long: true })}
• OS Uptime           : ${ms(os.uptime() ?? 0, { long: true })}
\`\`\`
`)
                .addFields([
                   {
                       name: "🤖 • Bot info",
                       value: `\`\`\`• Node.js version     : ${process.version} 
• Discord.js version  : v${discord.version} 
• Bot Version         : v${packageJson.version} 
• Server Are In       : ${client.guilds.cache.size}\`\`\``
                   }
                ])
                .setFooter(`Requested by ${interaction.user.username} | Today at ${timezone.tz("Asia/Ho_Chi_Minh").format("HH:mma") + " "}`, interaction.user.displayAvatarURL({
                    dynamic: true
                }))
            interaction.followUp({ embeds: [embed] })
        } catch (e) {
            const embed = new discord.MessageEmbed()
                .setDescription(`${e}`)
                .setColor("RED")
            interaction.followUp({ embeds: [embed] })
        }
    }
};

function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}