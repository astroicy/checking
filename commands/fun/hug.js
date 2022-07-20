const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
        name: "hug",
        description: "To show all command",
        usage: "",
        aliases: ["hug"],

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);
        let res = await fetch("https://nekos.life/api/v2/img/hug");
        res = await res.json();

        const user = await message.mentions.users.first();

        if (!user) {return message.reply(":x: Mention a Valid User!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));}

        const embed = new MessageEmbed()
            .setTitle(`${message.author.tag} hug ${user.tag}`)
            .setColor('WHITE') 
            .setImage(res.url)
        message.channel.send({ embeds: [embed] })
    }
}