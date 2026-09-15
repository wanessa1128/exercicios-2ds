class Comprovante {
    constructor(remetente) {
        this.remetente = remetente
    }
}

class Carta extends Comprovante {
    emitir() {
        return "Comprovante de postagem de carta emitido para: " + this.remetente
    }
}

class Sedex extends Comprovante {
    emitir() {
        return "Comprovante de postagem de Sedex emitido para: " + this.remetente
    }
}

class Pac extends Comprovante {
    emitir() {
        return "Comprovante de postagem de PAC emitido para: " + this.remetente
    }
}

Comprovante.Carta = Carta
Comprovante.Sedex = Sedex
Comprovante.Pac = Pac

module.exports = Comprovante
