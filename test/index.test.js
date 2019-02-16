const file = require('../src/index');

describe('Testes da função soma', () => {

    it('deve resultar em 3 ao executar a função soma', () => {
        expect(file.soma(1, 2)).toBe(3);
    });

    it('o resultado deve ser maior que 5', () => {
        expect(file.soma(7, 8)).toBeGreaterThan(5);
    });

});

describe('Testes da função subtrai', () => {

    it('deve resultar em 2 ao executar a função subtrai', () => {
        expect(file.subtrai(4, 2)).toBe(2);
    });

});
