const {

ChannelType,
PermissionsBitField,
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle

}=require("discord.js");


const config = require("../config.json");


const tickets = new Map();



module.exports = async(interaction,type)=>{


const user = interaction.user;



if(tickets.has(user.id)){


return interaction.reply({

content:
"❌ Zaten açık bir ticketin var.",

ephemeral:true

});


}



const channel = await interaction.guild.channels.create({

name:
`ticket-${user.username}`,

type:
ChannelType.GuildText,


parent:
config.ticketCategory,


permissionOverwrites:[


{

id:
interaction.guild.id,


deny:[

PermissionsBitField.Flags.ViewChannel

]

},



{

id:
user.id,


allow:[

PermissionsBitField.Flags.ViewChannel,

PermissionsBitField.Flags.SendMessages,

PermissionsBitField.Flags.ReadMessageHistory

]

},



{

id:
config.ticketSupportRole,


allow:[

PermissionsBitField.Flags.ViewChannel,

PermissionsBitField.Flags.SendMessages,

PermissionsBitField.Flags.ReadMessageHistory,

PermissionsBitField.Flags.ManageMessages

]

}



]


});



tickets.set(
user.id,
channel.id
);



const embed = new EmbedBuilder()

.setColor("#00BFFF")

.setTitle(
"⚔️ AEGİS NW | Ticket"
)

.setDescription(`

👤 Açan:
${user}


📂 Kategori:
${type}


🛡️ Destek ekibi birazdan ilgilenecek.


`)

.setTimestamp();



const buttons = new ActionRowBuilder()

.addComponents(


new ButtonBuilder()

.setCustomId(
"ticket_close"
)

.setLabel(
"Ticket Kapat"
)

.setEmoji("🔒")

.setStyle(
ButtonStyle.Danger
)



);



await channel.send({

content:
`${user} <@&${config.ticketSupportRole}>`,

embeds:[embed],

components:[buttons]

});



await interaction.reply({

content:
`✅ Ticket oluşturuldu: ${channel}`,

ephemeral:true

});


};
