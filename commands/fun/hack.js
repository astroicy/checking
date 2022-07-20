module.exports = {
    name: "hack",
    aliases: [""],
    description: "Ah shit, here we go again.",
    category: "fun",
    cooldown: 3,
    run: async (client, message, args) => {
        const user = await message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send("<:Crossmark:930711118039621632> **Please mention that user you need to hack.**").catch(err => log.send(`\`\`\`prolog\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        

        message.channel.send(`**Hacking ${user.username} now...**`)
        .then((msg) => {
          setTimeout(function() {
            msg.edit(`<a:loading_gif:930706545287761971> **Finding Email Address...**`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`:white_check_mark: **Email Address : ${user.username}@lmao.com \n Password : ${user.username}123456**`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`<a:loading_gif:930706545287761971> **Finishing hacking...**`);
          }, 11000)
          setTimeout(function() {
            msg.edit(`<a:loading_gif:930706545287761971> **Reporting account to discord for breaking TOS...**`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`<a:loading_gif:930706545287761971> **Finding IP address**`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`:white_check_mark: **IP ADDRESS :  253.38.234.41**`);
          }, 3000)
         setTimeout(function() {
            msg.edit(`<:half_troll:930695043545694238> **Finished hacked ${user.username}.**`);
         }, 13000)
         })
    }
}