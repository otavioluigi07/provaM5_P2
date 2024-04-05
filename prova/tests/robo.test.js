const { Fila } = require('../service/service.js');
const { RoboDeLimpeza } = require('../service/service.js');

test('Adicionar tarefas no Robo', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefa(1)
    expect(robo.adicionarTarefa("oii")).toBe(true);
});

test('Executando próxima tarefa no Robo', () => {
    const robo = new RoboDeLimpeza();
    expect(robo.executarProximaTarefa()).toBe(true);
});

test('Executando todas tarefas no Robo', () => {
    const robo = new RoboDeLimpeza();
    expect(robo.executarTodasTarefas()).toBe(true);
});
