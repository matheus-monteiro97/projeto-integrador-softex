const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/router");
const database = require("./config/connectionDB");

app.use(bodyParser.json());

app.use('/', router);

database.sync()
.then(()=> {
    app.listen (3000, ()=>{
        console.log("Server running on port 3000");
    }); 
})
.catch (error => {
    console.error('Erro ao sincronizar modelos com o banco de dados:', error);
});
