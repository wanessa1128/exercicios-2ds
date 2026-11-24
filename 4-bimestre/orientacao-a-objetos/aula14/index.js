const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_CONTATOS || "contatos.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
    return JSON.parse(conteudo)
    } catch (erro) {
        return []
    }
}

async function salvar(contato) {
    const lista = await listar()
    lista.push(contato)
    await fs.writeFile(ARQUIVO, JSON.stringify(lista, null, 2))
    return contato
}

async function buscarPorNome(nome) {
    const lista = await listar()
    const contato = lista.find(c => c.nome === nome)
    return contato || null
}

module.exports = { listar, salvar, buscarPorNome }