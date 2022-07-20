const simplydjs = require("simply-djs")

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;
    await interaction.deferReply().catch(e => { })
    const slashcmds = client.slashcommands.get(interaction.commandName)
    if(!slashcmds) return;
    simplydjs.clickBtn(interaction);
    try{
      await slashcmds.run(interaction, client)
    } catch(e) {
      console.error(e)
    }
}