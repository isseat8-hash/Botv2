module.exports = async interaction=>{


if(
interaction.customId==="announce_modal"
){


const text =
interaction.fields.getTextInputValue("announce");


await interaction.reply({

content:
"📢 Duyuru gönderildi.",

ephemeral:true

});


interaction.channel.send({

content:
`📢 **AEGİS NW DUYURU**

${text}`

});


}



}
