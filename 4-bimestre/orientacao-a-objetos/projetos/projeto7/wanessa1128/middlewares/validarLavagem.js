function validarLavagem(req, res, next) {
    const { motorista, pacote, valor } = req.body || {}

    let mensagem = null

    if (!motorista) {
        mensagem = "O campo motorista e obrigatorio"
    } else if (!pacote) {
        mensagem = "O campo pacote e obrigatorio"
        } else if (typeof valor !== "number" || Number.isNaN(valor)) {
            mensagem = "O campo valor deve ser um numero"
      } else if (valor <= 0) {
            mensagem = "O campo valor deve ser maior que zero"
   }
   
   if (mensagem) {
    const erro = new Error(mensagem)
    erro.status = 400
    return next(erro)

   }
    
   next()
}

module.exports = validarLavagem