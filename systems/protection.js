module.exports=
(client)=>{


client.on(
"messageCreate",
async message=>{


if(message.author.bot)return;



const words=[
"discord.gg/",
"@everyone",
"@here"
];



if(
words.some(
x=>message.content.includes(x)
)
){


message.delete();


message.channel.send({

content:
`⚠️ ${message.author}
Reklam koruması aktif.`

})
.then(
m=>setTimeout(
()=>m.delete(),
5000
)
);



}



});



}
