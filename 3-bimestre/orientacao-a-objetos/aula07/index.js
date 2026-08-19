class Produto {
    constructor(nome, preco, categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
}

const produto = new Produto("Notebook", 3500, "Eletrônicos")

module.exports = produto