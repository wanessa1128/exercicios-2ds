const { carregarConfig } = require("./config")

function handler(req, res) {
  const config = carregarConfig()

  if (req.url === "/") {
    res.statusCode = 200
    res.end(`Servico ativo: ${config.servico}`)
  } else if (req.url === "/teste") {
    res.statusCode = 200
    res.end("teste")
  } else if (req.url === "/status") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      online: true,
      ...config
    }))
  } else {
    res.statusCode = 404
    res.end("Rota nao encontrada")
  }
}

module.exports = handler