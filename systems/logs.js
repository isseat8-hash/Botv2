const {
EmbedBuilder
}=require("discord.js");


module.exports=
async(guild,title,text)=>{


const channel=
guild.channels.cache.find(
x=>x.name==="logs"
);


if(!channel)return;



const embed=
new EmbedBuilder()

.setColor("#00BFFF")

.setTitle(
"⚔️ AEGİS NW LOG"
)

.addFields({

name:title,
value:text

})

.setTimestamp();



channel.send({
embeds:[embed]
});


}
