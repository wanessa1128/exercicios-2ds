const express = require("express")
const router = express.Router()

const servicos = [
    { id: 1, nome: "Troca de Oleo", area: "mecanica", preco: 180, disponivel: true},
    { id: 2, nome: "Alinhamento", area: "suspensao", preco: 120, disponivel: true},
    { id: 3, nome: "Revisao", area: "mecanica", preco: 400, disponivel: false}
]

router.get("/", (req,res) => {
    res.status(200).json(servicos)
})

router.get("/disponiveis", (req,res) => {
    res.status(200).json(servicos.filter(s => s.disponivel === true))
})

router.get("/total", (req, res) => {
    res.status(200).json({ total: servicos.length })
})

router.post("/", (req,res) => {
    res.status(201).json({ mensagem: "Cadastro de servico realizado"})
})

module.exports = router