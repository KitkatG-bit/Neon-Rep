
module.exports = {
  name: "setprefix",
  code: `
      $setGuildVar[prefix;$message]
   <Config1:1334660718661996554> **|** Prefixo alterado para **$message** com sucesso!
    $onlyIf[$message!=;<@$authorID> me forneça o novo prefix!]
`
  }
