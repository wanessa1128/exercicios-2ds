const express =("expess")
const lavagensRouter = require("./routes/lavagens")

const app = express()

app.use(express.json())
app.use("/lavagens", lavagensRouter)

app.use((req, res) => {
     res.status(404).json({ erro: "Rota nao encontrada" })
    })

    app.use((erro, req, res, next)=> {
        res.status(erro.status || 500).json({ erro: erro.message })
    })

   modulo.express = app