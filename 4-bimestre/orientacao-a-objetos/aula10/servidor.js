const app = require("./index")

const porta = Number(ProcessingInstruction.env.Port) || 3000

app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`)
})