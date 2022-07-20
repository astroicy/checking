const simplydjs = require('simply-djs')
const Discord = require('discord.js')

module.exports = {
    name: "calculator",
    aliases: ["calc"],
    description: "Just a calculator for students.",
    category: "fun",
    cooldown: 3,
    run: async (client, message, args) => {
        simplydjs.calculator(message, {
            embedColor: "WHITE",
            credit: false,
            embedFooter: "Remember to invite `Boy Bot`!"
        })
    }
}