const express = require("express")
const validarLavagem = require("../middlewares/validarLavagem")

const router = express.Router()

const lavagens = [
    { id: 1, motorista: "Ana", pacote: "Simples", valor: 35, situacao: "pronta"},
    { id: 2, motorista: "Bruno", pacote: "Completo", valor: 70, situacao: "lavando"},
    { id: 3, motorista: "Carla", pacote: "Premium", valor: 140, situacao: "lavando"}
]

router.get("/", (req, res) => {
    const { situacao, valorMin } = req.query
    let resultado = lavagens 

    if (situacao) {
        resultado = resultado.filter((l) => l.situacao === situacao) 
    }
    if (valorMin !== undefined) {
        resultado = resultado.filter((l) => l.valor >= Number(valorMin))
    } 

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const lavagem = lavagens.find((l) => l.id === Number(req.params.id))

    if (!lavagem) {
        const erro = new Error("Lavagem nao enontrado")
        erro.status = 404
        return next(erro)
    }
    res.status(200).json(lavagem)
})

router.post("/", validarLavagem, (req, res) => {
    const { motorista, pacote, valor} = req.body
    const id = Math.max(0, ...lavagens.map((l) => l.id)) +1

    lavagens.push ({ id, motorista, pacote, valor, situacao: "na fila"})

    res.status(201).json({mensagem: "Registro de lavagem criado"})
})

module.exports = router