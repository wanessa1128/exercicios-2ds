class Livro {
    constructor(titulo,autor,ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }
    emprestar(){
        if(this.disponivel){
        this.disponivel = false
        }else{
            return
        }
    }
    devolver(){
        if(!this.disponivel){
            this.disponivel = true
        }else{
            return
        }
    }
    estaDisponivel(){
        if(this.disponivel){
            return true
        }else{
            return false
        }
    }
}
const livro = new Livro(
            "O Hobbit",
            "J.R.R. Tolkien",
            1937 
    )

module.exports = Livro