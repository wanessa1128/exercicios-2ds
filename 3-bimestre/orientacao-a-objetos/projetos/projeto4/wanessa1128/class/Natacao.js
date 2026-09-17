const Atleta = require("./Atleta")

class Natacao extends Atleta {
    descricao() {
        return "Atleta de natação convocado"
    }
}

module.exports = Natacao