const { AoiClient } = require("aoi.js");


const client = new AoiClient({
  token: "MTMyMzA2OTcxMjU2MDY4NTIwNg.GR2IyF.LsJiou7zSH6otLKDkY5h-3FWO24bEsd7HROP5I",
  prefix: [ "$","$getGuildVar[prefix]"],
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});
client.command({
    name: "<@$clientID>",
    aliases: ["<@!$clientID>"],
    nonPrefixed: true,
    code: `
    $reply <:emoji_17:1334644710270308386> **|** Olá <@$authorID>, me chamo **$username[$clientID] Tudo bom com você?, sou um bot de rpg geral chamado **RPG World** hehehehehehehe! meu prefixo atual nesse servidor é: $getGuildVar[prefix] então use \`\`$getGuildVar[prefix]ajuda\`\` para ver meus comandos!**. 
`});


client.variables({
   prefix: "$",

})

client.status({
name: "RPG em andamento",
type: "Custom",
time: 12,
});

client.loadCommands("./comandos/", true)   
