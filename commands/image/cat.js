const Discord = require('discord.js')
const got = require('got');

module.exports = {
    name: "cat",
    aliases: [""],
    description: "Jail Image Command!",
    category: "image",
    vote: true,
    cooldown: 5,
    run: async (client, message, args) => {
        let catembed = new Discord.MessageEmbed() 
        got('https://www.reddit.com/r/catpictures/random/.json').then(response => { let content = JSON.parse(response.body); 
        let Image = content[0].data.children[0].data.url; 
        catembed.setTitle("Aww...")
        catembed.setImage(Image) 
        catembed.setColor('WHITE')
        catembed.setURL(Image)
        message.channel.send({ embeds : [catembed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    })
    }    
}