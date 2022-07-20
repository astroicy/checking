const { MessageEmbed, Message } = require("discord.js");
const schema = require("../../models/premium")
const day = require("dayjs")

module.exports = {
    name: `addpremium`,
    category: `Premium`,
    aliases: [`ap`],
    description: `Add Premium`,
    cooldown: 0,
    usage: `addpremium <id> <time>`,
    run: async (client, message, args, guildData, player, prefix) => {

        if (message.author.id !== "885476584046346241") {

            const nop = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You are not allowed to run this command! Only Developers Are allowed to run this command`)
            return message.channel.send({ embeds: [nop] })


        }

        const aa = new MessageEmbed()
            .setDescription(`Please Provide A Guild Id!`)
            .setColor('#303037')
        const aaa = new MessageEmbed()
            .setDescription(`Please Provide A Valid Guild ID!!`)
            .setColor('#303037')
        if (!args[0]) return message.reply({ embeds: [aa] })
        if (!client.guilds.cache.has(args[0])) return message.reply({ embeds: [aaa] });




        schema.findOne({ Guild: args[0] }, async (err, data) => {

            if (data) data.delete();


            if (args[1]) {
                const Expire = day(args[1]).valueOf();
                const guildop = args[0]
                const guildname = client.guilds.cache.get(guildop)
                const user = client.users.cache.get(guildname.ownerId)

                new schema({
                    Guild: args[0],
                    Expire,
                    Permanent: false
                }).save();
                user.send(`Hey friend, Your server **${guildname.name}** has \`Monthly Plan\` Premium! \nPremium will be expired in \`${day(args[1]).format('DD/MM/YYYY')}\``)
            } else {
                const guildop = args[0]
                const guildname = client.guilds.cache.get(guildop)
                const user = client.users.cache.get(guildname.ownerId)
                new schema({
                    Guild: args[0],
                    Expire: 0,
                    Permanent: true
                }).save();
                user.send(`Hey friend, Your server **${guildname.name}** has \`Lifetime Plan\` Premium!`)
            }
            const guildop = args[0]
            const guildname = client.guilds.cache.get(guildop)

            const lol = new MessageEmbed()
                .setDescription(`✅ Successfully Added **${guildname.name}** In Premium List`)
                .setColor(`#303037`)
            message.reply({ embeds: [lol] })
        })




    },
    
}