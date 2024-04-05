const { Fila } = require('../service/service.js');

test('Enfileirar fila', () => {
    const fila = new Fila();
    fila.enfileirar(1);
    expect(fila.frente()).toBe(1);
});

test('Desenfileirar fila', () => {
    const fila = new Fila();
    fila.desenfileirar()
    expect().toBe();
});

test('Verificar se a Fila está vazia', () => {
    const fila = new Fila();
    expect(fila.vazia()).toBe(true);
});

