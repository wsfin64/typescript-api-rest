# Criar um projeto

## iniciar um projeto (criação de arquivo package.json)
yarn init -y

## instalando bibliotecas de desenvolvimento
yarn add -D typescript nodemon ts-node @types/express @types/node

## instalando bibliotecas de produção
yarn add express pg typeorm dotenv reflect-metadata

express - api rest
pg - banco de dados postgress
typeorm - gestão e conexão com o banco de dados
dotenv - configurar variáveis de ambiente
reflect-metadata - dependencia do typeorm

## Adicionar o campo "script" dentro do package.json para rodar os arquivos .ts com o nodemon
"scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
  }

## iniciar o typescript - arquivo de configuração do typescript (criar o tsconfg.json) 
npx tsc --init

## apagar a configuração padrão criada e adicionar a configuração customizada no tsconfig.json:


## criar arquivo .env para as variáveis ambiente do banco de dados com o seguinte conteudo:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgress
DB_PASS=postgres
DB_NAME=api_rest_typescript


## configuração inicial do type-orm criando um arquivo data-source.ts

## Fazer configuração no index.ts

## Para testar, usar o comando:
 - yarn dev