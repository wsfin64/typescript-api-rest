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

## apagar a configuração padrão criada e adicionar a configuração customizada abaixo no tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2018",
    "lib": ["es5", "es6", "ES2018"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "strictPropertyInitialization": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "ts-node": {
    "files": true
  }
}

## criar arquivo .env para as variáveis ambiente do banco de dados com o seguinte conteudo:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgress
DB_PASS=postgres
DB_NAME=api_rest_typescript


## configuração inicial do type-orm criando um arquivo data-source.ts e criando a configuração inicial abaixo:

import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: process.env.DB_HOST,
        port: port,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        
    }
)
