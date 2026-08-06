const { EmbedBuilder } = require("discord.js");

module.exports = async (message) => {
    try {
        const embed = new EmbedBuilder()
            .setColor("#00BFFF")
            .setTitle("⚔️ AEGİS NW")
            .addFields(
                {
                    name: "🌐 JAVA SUNUCUSU",
                    value:
                        "📡 **IP:** Yakında\n🟢 **Durum:** Yakında\n📦 **Sürüm:** 1.21.x",
                },
                {
                    name: "📱 BEDROCK SUNUCUSU",
                    value:
                        "📡 **IP:** Yakında\n🔌 **Port:** 19132\n🟢 **Durum:** Yakında",
                }
            )
            .setFooter({
                text: "💎 AEGİS NW'de seni bekliyoruz!"
            })
            .setTimestamp();

        await message.channel.send({
            embeds: [embed],
        });

    } catch (err) {
        console.error("ip.js Hatası:", err);
    }
};
