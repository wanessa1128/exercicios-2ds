const notificacao = require("./notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================

const { Email, SMS, App } = require("./notificacao")

function Factory(tipo, mensagem) {
  switch (tipo) {
    case "email":
      return new Email(mensagem)

    case "sms":
      return new SMS(mensagem)

    case "app":
      return new App(mensagem)

    default:
      throw new Error("Tipo de notificação inválido")
  }
}

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory