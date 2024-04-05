const express = require('express');
const router = express.Router();
const service = require('../service/service.js');

//Descrição: Este endpoint é responsável por solicitar a execução de todas as tarefas de limpeza pendentes na fila do Robô de Limpeza.
router.get('/executar_todas_tarefas', service.roboDeLimpeza.executarTodasTarefas);

module.exports = router;
