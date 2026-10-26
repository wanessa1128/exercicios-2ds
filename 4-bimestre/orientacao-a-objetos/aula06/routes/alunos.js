const express = require("express")

const router = express.Router()

const alunos = [
    { id: 1, nome: "Ana", nota: 8},
    { id: 2, nome: "Bruno" , nota: 6}
]

router.get("/", (req, res)=>{
     res.status(200).json(alunos)
})

router.get("/aprovados", (req,res) => {
    res.status(200).json(alunos.filter(aluno => aluno.nota >= 7))
})
module.exports = router