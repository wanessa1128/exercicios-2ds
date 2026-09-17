const Atleta = require("./Atleta")

class Futebol extends Atleta {
    constructor(nome, idade) {
        super(nome, idade)
        this.registros = []
    }

    descricao() {
        return "Atleta de futebol convocado"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Futebol