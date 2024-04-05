const request = require('supertest');
const app = require('../app.js');
const { RoboDeLimpeza } = require('../service/service.js');

test('Executar todas as tarefas do robô', async () => {
    const robo = new RoboDeLimpeza();
    const response = await request(app)
        .get('/executar_todas_tarefas')

    expect(response.status).toBe(200);
    expect(robo.executarTodasTarefas).toBe(false);
});
