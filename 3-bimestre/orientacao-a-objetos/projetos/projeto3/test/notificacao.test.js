const { Email, SMS, App } = require("../notificacao")
const criar = require("../factory")

test("Deve enviar uma notificação por e-mail", () => {
  const notificacao = new Email("Seu pedido foi aprovado")

  expect(notificacao.enviar())
    .toBe("E-mail enviado: Seu pedido foi aprovado")
})

test("Deve enviar uma notificação por SMS", () => {
  const notificacao = new SMS("Seu código é 1234")

  expect(notificacao.enviar())
    .toBe("SMS enviado: Seu código é 1234")
})

test("Deve enviar uma notificação pelo aplicativo", () => {
  const notificacao = new App("Você recebeu uma mensagem")

  expect(notificacao.enviar())
    .toBe("Notificação no aplicativo: Você recebeu uma mensagem")
})

test("Factory deve criar uma notificação por e-mail", () => {
  const notificacao = criar("email", "Olá")

  expect(notificacao.enviar())
    .toBe("E-mail enviado: Olá")
})

test("Factory deve criar uma notificação por SMS", () => {
  const notificacao = criar("sms", "Olá")

  expect(notificacao.enviar())
    .toBe("SMS enviado: Olá")
})

test("Factory deve criar uma notificação pelo aplicativo", () => {
  const notificacao = criar("app", "Olá")

  expect(notificacao.enviar())
    .toBe("Notificação no aplicativo: Olá")
})

test("Deve lançar erro para tipo inválido", () => {
  expect(() => criar("telegram", "Olá"))
    .toThrow("Tipo de notificação inválido")
})