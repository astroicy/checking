const discord = require("discord.js");
const {token, mongo} = require("./config.json")
const {Intents} = require("discord.js");
const mongoose = require('mongoose')
const simplydjs = require("simply-djs")

const client = new discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

// top.gg client
const Topgg = require('@top-gg/sdk')
client.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzMTE1ODEwMTk1OTI3NDU0NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ1NjI4MTA5fQ.KfrBQYyZRvuXIJuGt7PF0MT0DTLLXV56StnY5jyiFh8")
// bot client event
client.commands = new discord.Collection();
client.slashcommands = new discord.Collection();
client.aliases = new discord.Collection();
client.cooldowns = new discord.Collection();

["Handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//error decator
process.on("unhandledRejection", (reason, promise) => {
  try {
      console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
  } catch {
      console.error(reason);
  }
});

mongoose.connect(mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        }).then(() => {
            return;
})
client.login(process.env.token);