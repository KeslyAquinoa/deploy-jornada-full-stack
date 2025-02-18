import express from "express"
import 
cors from "cors"
import {db} from "./connect.js";


const app = express();
const PORT = 3001;

app.use(cors())

app.get('/', (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'")
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})


// API - Application Programming Interface
// API é um conjunto de definições e protocolos que permitem a comunicação entre diferentes sistemas de software.
// Ela define métodos e dados que podem ser usados por outros programas para interagir com o sistema que fornece a API. 

// CRUD - Create, Read, Update, Delete
// CRUD são as quatro operações básicas de persistência de dados em um banco de dados.
// Create: Adicionar novos dados.
// Read: Ler ou recuperar dados existentes.
// Update: Atualizar dados existentes.
// Delete: Remover dados existentes.

// Como criar uma API
// npm install express - Framework
// node --watch ./api/server.js - faz o Node.js monitorar o arquivo server.js e reiniciar automaticamente sempre que houver alguma alteração. 