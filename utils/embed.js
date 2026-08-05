const {
EmbedBuilder
}=require("discord.js");


module.exports={


success(text){

return new EmbedBuilder()

.setColor("#00FF00")

.setDescription(
"✅ "+text
);

},


error(text){

return new EmbedBuilder()

.setColor("#FF0000")

.setDescription(
"❌ "+text
);

}


}
