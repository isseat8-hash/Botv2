require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Collection,
    ActivityType
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();

client.once("ready", () => {

    console.log(`✅ ${client.user.tag} aktif!`);

    client.user.setActivity("AEGİS NW Network", {
        type: ActivityType.Watching
    });

});

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    if (message.content === "!ip") {
        require("./commands/ip")(message);
    }

    if (message.content === "!panel") {
        require("./commands/panel")(message);
    }

    if (message.content === "!ticketpanel") {
        require("./commands/ticketpanel")(message);
    }

});

client.on("interactionCreate", async (interaction) => {

    if (interaction.isButton()) {
        require("./interactions/buttons")(interaction);
    }

    if (interaction.isStringSelectMenu()) {
        require("./interactions/menus")(interaction);
    }

    if (interaction.isModalSubmit()) {
        require("./interactions/modals")(interaction);
    }

});

client.login(process.env.TOKEN);
