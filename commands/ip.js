module.exports = async (message) => {

    const embed = new EmbedBuilder()
        .setColor("#00BFFF")
        .setDescription(`
╔════════════════════════════╗
          ⚔️ AEGİS NW ⚔️
╚════════════════════════════╝

🌐 **JAVA SUNUCUSU**
━━━━━━━━━━━━━━━━━━━━

📡 IP      » Yakında
🟢 Durum   » Yakında
📦 Sürüm   » 1.21.x

📱 **BEDROCK SUNUCUSU**
━━━━━━━━━━━━━━━━━━━━

📡 IP      » Yakında
🔌 Port    » 19132
🟢 Durum   » Yakında

━━━━━━━━━━━━━━━━━━━━

💎 AEGİS NW'de seni bekliyoruz!
🚀 Discord'umuzu takip et.
`);

    await message.channel.send({
        embeds: [embed]
    });

};
