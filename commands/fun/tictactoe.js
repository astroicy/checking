const simplydjs = require('simply-djs')
const Discord = require('discord.js')

module.exports = {
    name: "tictactoe",
    aliases: ["tic"],
    description: "Tic tac toe!",
    category: "fun",
    cooldown: 3,
    hidden: true,
    run: async (client, message, args) => {
        simplydjs.tictactoe(message, {
            embedColor: "WHITE",
            credit: false,
        })
    }
}