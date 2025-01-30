module.exports = [{
name: "daily",
aliases: ["diária", "diário"],
code: `
Você recebeu $random[200;1000]
$setUserVar[neon;$sum[$getUserVar[neon;$authorID];$random[200;1000]]]]
Bastões Luminosos hehehhe    `
}]  
