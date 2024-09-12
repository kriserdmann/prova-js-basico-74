const somaNumeros = require('./q1');
const ehPar = require('./q2');
const fizzBuzz = require('./q3');
const somaFibonacciPares = require('./q4');

describe('Prova de Lógica JavaScript', () => {
  let pontuacao = 0;

  test('Q1: Soma de dois números', () => {
    expect(somaNumeros(2, 3)).toBe(5);
    expect(somaNumeros(-1, 1)).toBe(0);
    expect(somaNumeros(0, 0)).toBe(0);
    pontuacao++;
  });

  test('Q2: Verifica se um número é par', () => {
    expect(ehPar(2)).toBe(true);
    expect(ehPar(3)).toBe(false);
    expect(ehPar(0)).toBe(true);
    pontuacao++;
  });

  test('Q3: FizzBuzz', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    fizzBuzz();
    expect(consoleLogSpy).toHaveBeenCalledTimes(100);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Fizz');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Buzz');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(15, 'FizzBuzz');
    consoleLogSpy.mockRestore();
    pontuacao++;
  });

  test('Q4: Soma dos termos pares da sequência de Fibonacci', () => {
    expect(somaFibonacciPares()).toBe(4613732); // Valor correto da soma
    pontuacao++;
  });
  // ... (código posterior)

  afterAll(() => {
    console.log(`Pontuação final: ${pontuacao}/10`);
    const nota = (pontuacao / 10) * 10;
    console.log(`Nota: ${nota.toFixed(1)}`);
  });
});
