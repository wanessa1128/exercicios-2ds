const Comprovante = require("./Comprovante")

function criar(tipo, remetente) {
    if (tipo === "carta") {
        return new Comprovante.Carta(remetente)
    }

    if (tipo === "sedex") {
        return new Comprovante.Sedex(remetente)
    }

    if (tipo === "pac") {
        return new Comprovante.Pac(remetente)
    }

    throw new Error("Tipo de comprovante inválido")
}

module.exports = {
    criar
}
