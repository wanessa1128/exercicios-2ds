const express = require("express")
const router = express.Router()

const servicosRouter = require("./servicos")
const motoristasRouter = require("./motoristas")

router.get("/", (req,res) => {
    res.status(200).json({ mensagem: "API de Oficina"})
})

router.use("/servicos", servicosRouter)
router.use("/motoristas", motoristasRouter)

module.exports = router