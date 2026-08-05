const {
PermissionsBitField
}=require("discord.js");


module.exports = async interaction=>{


if(
interaction.customId==="ticket_close"
){


if(
!interaction.member.roles.cache.has(
require("../config.json").ticketSupportRole
)
&&
!interaction.member.permissions.has(
PermissionsBitField.Flags.Administrator
)
){

return interaction.reply({

content:
"鉂� Sadece destek ekibi ticket kapatabilir.",

ephemeral:true

});

}



await interaction.reply({

content:
"馃敀 Ticket 5 saniye i莽inde kapat谋lacak.",

ephemeral:true

});



setTimeout(()=>{

interaction.channel.delete();

},5000);



}



};
