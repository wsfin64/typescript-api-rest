# Criar um projeto

## iniciar um projeto (criação de arquivo package.json)
 - yarn init -y

## instalando bibliotecas de desenvolvimento
 - yarn add -D typescript nodemon ts-node @types/express @types/node

## instalando bibliotecas de produção
 - yarn add express pg typeorm dotenv reflect-metadata

 - express - api rest
 - pg - banco de dados postgress
 - typeorm - gestão e conexão com o banco de dados
 - dotenv - configurar variáveis de ambiente
 - reflect-metadata - dependencia do typeorm

## Adicionar o campo "script" dentro do package.json para rodar os arquivos .ts com o nodemon
"scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
  }

## iniciar o typescript - arquivo de configuração do typescript (criar o tsconfg.json) 
 - npx tsc --init

## apagar a configuração padrão criada e adicionar a configuração customizada no tsconfig.json:


## criar arquivo .env para as variáveis ambiente do banco de dados com o seguinte conteudo:
 - DB_HOST=localhost
 - DB_PORT=5432
 - DB_USER=postgress
 - DB_PASS=postgres
 - DB_NAME=api_rest_typescript


## configuração inicial do type-orm criando um arquivo data-source.ts

## Fazer configuração no index.ts

## Para testar, usar o comando:
 - yarn dev

 ## Após criar as entidades e seus relacionamentos, criar os scripts de migrations e incluí-los no package.json dentro da propriedade "scripts"
  - "migration:generate": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:generate ./src/migrations/default"
  - "migration:run": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:run"

## Incluir o caminho das entidades e das migrations para que o type-orm possa reconhê-las dentro do data-source.ts
 - entities: [`${__dirname}/**/entities/*.{ts,js}`]
 - migrations: [`${__dirname}/**/migrations/*.{ts,js}`]

## Agora, para gerar as migrations, basta executar o comando:
 - yarn migration:generate

## Para executar as migrations, basta executar o comando:
 - yarn migration:run