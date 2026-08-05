const {
EmbedBuilder
}=require("discord.js");


module.exports=
async(channel,time,prize)=>{


const embed=
new EmbedBuilder()

.setColor("#FFD700")

.setTitle(
"🎁 AEGİS NW Giveaway"
)

.setDescription(`

🎁 Ödül:
${prize}


⏰ Süre:
${time}


Katılmak için 🎉 reaksiyonu bırak.

`);



const msg =
await channel.send({

embeds:[embed]

});


await msg.react("🎉");


}
