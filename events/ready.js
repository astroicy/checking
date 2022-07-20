const config = require("../config.json");
module.exports = async (client) => {
client.setMaxListeners(10)
console.log(`${client.user.tag} is ready!`);
setInterval(() => {client.user.setActivity(`${config.prefix}help`, {type: 'WATCHING'})}, 5000);
};