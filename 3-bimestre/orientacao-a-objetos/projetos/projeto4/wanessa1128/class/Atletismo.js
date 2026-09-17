const Atleta = require("./Atleta")

class Atletismo extends Atleta {
    descricao() {
        return "Atleta de atletismo convocado"
    }
}

module.exports = Atletismo