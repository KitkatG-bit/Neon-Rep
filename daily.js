module.exports = [{
name: "daily",
aliases: ["diária", "diário"],
code: `
Você recebeu $random[200;1000] Bastões Luminosos hehehhe 💰
$addButton[1;$random[200;1000;primary;$random[200;1000;true]
$setUserVar[neon;$sum[$getUserVar[neon;$authorID];$random[200;1000]]]]`
}]  
