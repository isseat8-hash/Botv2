const {
EmbedBuilder
}=require("discord.js");

const panel =
require("../panels/adminPanel");


module.exports=(message)=>{


if(
!message.member.permissions.has("Administrator")
)
return message.reply(
"❌ Bu panel sadece yöneticiler içindir."
);



message.channel.send(panel());


}
