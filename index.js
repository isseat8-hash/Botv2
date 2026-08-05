const {
Client,
GatewayIntentBits,
Collection
} = require("discord.js");

const config = require("./config.json");

const client = new Client({

intents:[
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
]

});


client.commands = new Collection();



client.on("ready",()=>{

console.log(
`⚔️ AEGİS NW Aktif | ${client.user.tag}`
);

client.user.setActivity(
"AEGİS NW Network",
{
type:3
});

});



// KOMUTLAR

client.on("messageCreate",async message=>{


if(message.author.bot) return;


if(message.content === "!ip"){

require("./commands/ip")
(message);

}



if(message.content === "!panel"){

require("./commands/panel")
(message);

}


});




// BUTONLAR

client.on(
"interactionCreate",
async interaction=>{


if(interaction.isButton()){

require("./interactions/buttons")
(interaction);

}



if(interaction.isModalSubmit()){

require("./interactions/modals")
(interaction);

}


});


client.login(config.token);
