const fs = require("fs/promises")

function obterCaminhoArquivo() {
  return process.env.ARQUIVO_ENCOMENDAS || "encomendas.json"
}

async function gravarArquivo(lista) {
  const caminho = obterCaminhoArquivo()
  await fs.writeFile(caminho, JSON.stringify(lista, null, 2), "utf-8")
}

async function listar() {
  try {
    const caminho = obterCaminhoArquivo()
    const conteudo = await fs.readFile(caminho, "utf-8")
    return JSON.parse(conteudo)
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return []
    }
    throw erro
  }
}

async function salvar(encomenda) {
  const lista = await listar()
  lista.push(encomenda)
  await gravarArquivo(lista)
  return encomenda
}

async function atualizar(id, dados) {
  const lista = await listar()
  const indice = lista.findIndex((item) => item.id === id)

  if (indice === -1) {
    return null
  }

  lista[indice] = { ...lista[indice], ...dados, id }
  await gravarArquivo(lista)
  return lista[indice]
}

async function remover(id) {
  const lista = await listar()
  const novaLista = lista.filter((item) => item.id !== id)

  if (novaLista.length === lista.length) {
    return false
  }

  await gravarArquivo(novaLista)
  return true
}

module.exports = { listar, salvar, atualizar, remover }
