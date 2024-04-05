// server.js
const express = require('express');
const routes = require('../outroTeste/route/routes.js');

const app = express();

app.use(express.json()); 
app.use('/', routes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; 