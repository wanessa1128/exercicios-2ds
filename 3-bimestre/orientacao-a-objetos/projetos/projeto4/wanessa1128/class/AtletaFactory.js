const Futebol = require("./Futebol")
const Natacao = require("./Natacao")
const Atletismo = require("./Atletismo")

function criar(tipo, nome, idade) {
    if (tipo === "futebol") {
        return new Futebol(nome, idade)
    }

    if (tipo === "natacao") {
        return new Natacao(nome, idade)
    }

    if (tipo === "atletismo") {
        return new Atletismo(nome, idade)
    }

    throw new Error("Tipo de atleta inválido")
}

module.exports = {
    criar
}