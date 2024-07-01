import express from 'express'
import { AppDataSource } from './data-source'

// inicia conexão com o banco de dados antes do inicio da configuração do express
AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());
    app.get('/', (req, res) => {
        return res.json("tudo certo");
    })

    return app.listen(process.env.APP_PORT);
});