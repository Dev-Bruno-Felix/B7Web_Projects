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

1 - npm init
   1.1 - entry point: (index.js) src/server.ts
2 - npm i express helmet
3 - npm i -D @types/express @types/node tsx typescript
4 - Criar pasta e arquivo: src/server.ts
5 - npx tsc --init
6 - package.json
    6.1 - "dev": "node --import=tsx --watch ./src/server.ts"