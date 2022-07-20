module.exports = {
    name: "8ball",
    aliases: [""],
    description: "Ask a question",
    category: "fun",
    cooldown: 5,
    run: async (client, message, args) => {
        if (!args[0]) {
            return message.reply('Please ask me a question.').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))
        } else {
            message.channel.send();
            let eightball = [
               'No',
               'Yes',
               "I don't know"
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            setTimeout(() => {message.channel.send({content: eightball[index],});}, 750)
        }
    },
};
