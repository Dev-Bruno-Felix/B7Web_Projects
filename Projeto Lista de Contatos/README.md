API de Lista de Contatos:

Requisitos Funcionais:
- Criar um novo contato
- Listar os contatos
- Excluir o contato

Resquisitos não Funcionais:

Rotas:
- POST /contato { name: "João" }
- GET /contatos
- DELETE /contato?name=João

Passo a Passo para criar o projeto:

1 - npm init\n
\t   1.1 - entry point: (index.js) src/server.ts\n
2 - npm i express helmet\n
3 - npm i -D @types/express @types/node tsx typescript\n
4 - Criar pasta e arquivo: src/server.ts\n
5 - npx tsc --init\n
6 - package.json\n
\t    6.1 - "dev": "node --import=tsx --watch ./src/server.ts"