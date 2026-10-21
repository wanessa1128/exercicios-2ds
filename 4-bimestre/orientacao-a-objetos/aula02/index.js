const http = require("http")

function handler(req, res) {
   
    const portaAtual = Number(process.env.PORT) || 3000

    if (req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("API no ar")
        return
    }

    if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        
        res.end(JSON.stringify({ 
            status: "online", 
            porta: portaAtual 
        }))
        return
    }

    res.statusCode = 404
    res.setHeader("Content-Type", "text/plain")
    res.end("Rota nao encontrada")
}

const portaServidor = Number(process.env.PORT) || 3000
const servidor = http.createServer(handler)

if (require.main === module) {
    servidor.listen(portaServidor, () => {
        console.log(`Servidor rodando em http://localhost:${portaServidor}`)
    })
}

module.exports = handler