const {

EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle

}=require("discord.js");



module.exports=()=>{


const embed =
new EmbedBuilder()

.setColor("#00BFFF")

.setTitle(
"⚔️ AEGİS NW | NETWORK CONTROL PANEL"
)

.setDescription(`

🛡️ Yönetici Kontrol Merkezi


Bu panel üzerinden sunucu genelinde
kritik işlemler yapılabilir.


⚠️ Tüm işlemler loglanır.

`);



const row1 =
new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("dm")
.setLabel("DM Gönder")
.setEmoji("📩")
.setStyle(ButtonStyle.Primary),


new ButtonBuilder()
.setCustomId("role_add")
.setLabel("Toplu Rol Ver")
.setEmoji("👥")
.setStyle(ButtonStyle.Success),


new ButtonBuilder()
.setCustomId("role_remove")
.setLabel("Toplu Rol Al")
.setEmoji("❌")
.setStyle(ButtonStyle.Danger)

);



const row2 =
new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("announce")
.setLabel("Duyuru")
.setEmoji("📢")
.setStyle(ButtonStyle.Primary),


new ButtonBuilder()
.setCustomId("clear")
.setLabel("Mesaj Sil")
.setEmoji("🗑")
.setStyle(ButtonStyle.Danger),


new ButtonBuilder()
.setCustomId("lock")
.setLabel("Kanal Kilitle")
.setEmoji("🔒")
.setStyle(ButtonStyle.Secondary)

);



const row3 =
new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("stats")
.setLabel("İstatistikler")
.setEmoji("📊")
.setStyle(ButtonStyle.Success),


new ButtonBuilder()
.setCustomId("ticket")
.setLabel("Ticket Paneli")
.setEmoji("🎫")
.setStyle(ButtonStyle.Primary),


new ButtonBuilder()
.setCustomId("giveaway")
.setLabel("Giveaway")
.setEmoji("🎁")
.setStyle(ButtonStyle.Primary)

);



return {
embeds:[embed],
components:[
row1,
row2,
row3
]
};


}
