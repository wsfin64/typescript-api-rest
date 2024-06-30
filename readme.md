## Criar um projeto

# iniciar um projeto (criação de arquivo package.json)
yarn init -y

# instalando bibliotecas de desenvolvimento
yarn add -D typescript nodemon ts-node @types/express @types/node

# instalando bibliotecas de produção
yarn add express pg typeorm dotenv reflect-metadata

express - api rest
pg - banco de dados postgress
typeorm - gestão e conexão com o banco de dados
dotenv - configurar variáveis de ambiente
reflect-metadata - dependencia do typeorm

# Adicionar o campo "script" dentro do package.json para rodar os arquivos .ts com o nodemon
"scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
  }

# iniciar o typescript - arquivo de configuração do typescript (criar o tsconfg.json) 
npx tsc --init

# apagar a configuração padrão criada e adicionar a configuração customizada abaixo:
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