# Orientações do repositório

## Organização

- Este repositório reúne atividades escolares organizadas por bimestre, disciplina e aula/projeto; não é uma aplicação única.
- Cada aula ou projeto é uma unidade independente. Antes de alterar ou executar algo, entre na pasta da atividade e confira o `README.md`, o `package.json` e os testes locais.
- Atividades de Programação Web incluem páginas HTML/CSS/JavaScript e projetos React com Vite. Atividades de Orientação a Objetos usam JavaScript/Node.js. Não presuma uma estrutura ou dependências compartilhadas entre pastas.
- Algumas pastas de aulas futuras são excluídas pelo `.gitignore`; não as trate como atividades publicadas nem altere as regras de ignore sem necessidade.

## Executar, testar e validar

- Não há `package.json` nem comandos globais na raiz. Execute os comandos na pasta da aula/projeto, usando os scripts declarados no `package.json` daquela pasta.
- Para uma página estática, abra o `index.html` da atividade no navegador.
- Para um programa Node.js, instale as dependências locais quando necessário (`npm install`) e use o ponto de entrada indicado pelo README ou pelo `package.json` (por exemplo, `node index.js`).
- Para projetos React/Vite, na pasta do projeto use `npm install` e `npm run dev`; os scripts disponíveis também podem incluir `npm run build` e `npm run lint`.
- A maioria dos exercícios com `package.json` usa Jest. Rode a suíte com `npm test`; para um arquivo específico, use `npm test -- test/index.test.js`. Para filtrar pelo nome do teste, acrescente `-t "nome do teste"`.
- Alguns projetos React/Vite usam Vitest. Se o `package.json` declarar `test:run`, rode `npm run test:run`; para um arquivo ou padrão específico, use `npm run test:run -- src/caminho-do-teste`. Confira os scripts locais, pois nem toda atividade tem os mesmos comandos.
- Os workflows do GitHub Actions executam testes dentro das pastas específicas de aulas/projetos do 4º bimestre, com Node.js 20, `npm install` e `npm test`; isso não representa um comando de teste para a raiz inteira.

## Convenções específicas

- Preserve a hierarquia existente `bimestre/disciplina/aula-ou-projeto`; implemente mudanças na atividade correspondente, não em uma nova aplicação na raiz.
- O README e os testes de cada atividade descrevem seus requisitos locais. Siga-os em vez de inferir requisitos de uma atividade vizinha.
- Os nomes das atividades e boa parte do material são em português; mantenha o idioma e o contexto educacional existentes nas alterações voltadas aos alunos.
- Submissões de projetos podem ficar em subpastas identificadas pelo aluno. Confira o caminho esperado pela atividade e pelo workflow antes de mover ou renomear arquivos.
