const somaNumeros = require('./q1');
const ehPar = require('./q2');
const fizzBuzz = require('./q3');
const somaFibonacciPares = require('./q4');
const manipulacaoArrayLinguagens = require('./q5');
const manipulacaoObjeto = require('./q6');
const elementosComuns = require('./q7');
const encontrarDuplicados = require('./q8');
const criarEstudante = require('./q9');
const manipularArray = require('./q10');

let resultados = [];


  test('Q1: Soma de dois números', () => {
    const partialScore =
      (somaNumeros(2, 3) === 5) +
      (somaNumeros(-1, 1) === 0) +
      (somaNumeros(3.5, 2.7) === 6.2) +
      Number.isNaN(somaNumeros('a', 2));
    resultados.push({ questao: 1, score: (0.5 * partialScore) / 4 });
  });

  test('Q2: Verifica se um número é par', () => {
    const partialScore =
      (ehPar(2) === true) +
      (ehPar(3) === false) +
      (ehPar(0) === true) +
      (ehPar(-4) === true) +
      (ehPar(3.5) === null) +
      (ehPar('a') === null);
    resultados.push({ questao: 2, score: (0.5 * partialScore) / 6 });
  });

  test('Q3: FizzBuzz', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    fizzBuzz();
    const partialScore =
      (consoleLogSpy.mock.calls[2][0] === 'Fizz') +
      (consoleLogSpy.mock.calls[4][0] === 'Buzz') +
      (consoleLogSpy.mock.calls[14][0] === 'FizzBuzz');
    consoleLogSpy.mockRestore();
    resultados.push({ questao: 3, score: (0.5 * partialScore) / 3 });
  });

  test('Q4: Soma dos termos pares da sequência de Fibonacci', () => {
    const result = somaFibonacciPares();
    resultados.push({ questao: 4, score: (result === 60696) * 0.5 });
  });

  test('Q5: Manipulação de Array de Linguagens', () => {
    const result = manipulacaoArrayLinguagens();
    const expectedArray = [
      'Rust',
      'Python',
      'TypeScript',
      'Go',
      'Java',
      'C++',
      'Ruby',
    ];
    const arrayCheck = result.arrayFinal.every(
      (elem, index) => elem === expectedArray[index],
    );
    const lengthCheck = result.tamanhoArray === 7;
    resultados.push({ questao: 5, score: arrayCheck && lengthCheck ? 1 : 0 });
  });

  test('Q6: Manipulação de Objeto de Livro', () => {
    const livro = manipulacaoObjeto();

    const idadeEsperada = new Date().getFullYear() - 1992;
    const descricaoEsperada =
      'O livro "O Alquimista" foi escrito por "Paulo Coelho" e publicado em "1992".';

    // Calcula a pontuação baseada em todas as verificações
    let pontuacao =
      livro.titulo === 'O Alquimista' &&
      livro.autor === 'Paulo Coelho' &&
      livro.anoPublicacao === 1992 &&
      livro.editora === 'Rocco' &&
      livro.getIdade() === idadeEsperada &&
      livro.getDescricao() === descricaoEsperada
        ? 1
        : 0;

    // Adiciona o resultado ao array de resultados com o formato padrão
    resultados.push({ questao: 6, score: pontuacao });
  });

  test('Q7: Elementos Comuns', () => {
    const result = elementosComuns(['a', 'b'], ['b', 'c']);
    resultados.push({ questao: 7, score: result.includes('b') * 1 });
  });

  test('Q8: Encontrar caracteres duplicados em uma string', () => {
    const resultado = encontrarDuplicados('programacao web e mobile');
    const esperado = { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 };

    // Verifica se todas as chaves esperadas estão presentes e se os valores são corretos
    const allKeysMatch = Object.keys(esperado).every(
      (key) =>
        resultado.hasOwnProperty(key) && resultado[key] === esperado[key],
    );

    // Verifica se o número de chaves em ambos os objetos é o mesmo
    const correctKeyLength =
      Object.keys(resultado).length === Object.keys(esperado).length;

    // Pontuação baseada em todas as verificações corretas
    const pontuacao = allKeysMatch && correctKeyLength ? 1 : 0;

    resultados.push({ questao: 8, score: pontuacao });
  });

  test('Q9: Objeto Estudante', () => {
    const estudante = criarEstudante();
    const mediaCorreta =
      (estudante.nota1 + estudante.nota2 + estudante.nota3) / 3;
    const partialScore =
      estudante.nome &&
      estudante.idade &&
      estudante.media() === mediaCorreta &&
      estudante.situacao() === (mediaCorreta >= 7 ? 'Aprovado' : 'Reprovado');
    resultados.push({ questao: 9, score: partialScore * 2 });
  });

  describe('Q10: Manipulação de Array de Números', () => {
    test('Verifica a manipulação correta do array e cálculos resultantes', () => {
      const numeros = [1, 2, 3, 4, 5];
      const resultado = manipularArray(numeros);
  
      // Verifica se o array original não foi alterado
      expect(resultado.arrayOriginal).toEqual([1, 2, 3, 4, 5]);
  
      // Supondo agora que a cópia do array deveria ser alterada conforme as operações descritas
      expect(resultado.arrayCopia).toEqual([1, 2, 3, 4, 5]); // Após adicionar 0 e 10, e remover o primeiro e último elementos.
  
      // Verifica se a soma dos números no arrayCopia é calculada corretamente
      expect(resultado.soma).toBe(15);
  
      // Verifica se o maior número no arrayCopia é identificado corretamente
      expect(resultado.maiorNumero).toBe(5);
  
      // Verifica se o array de números pares no arrayCopia está correto
      expect(resultado.numerosPares).toEqual([2, 4]);
  
      // Adiciona o resultado ao array de resultados com o formato padrão
      const pontuacao = (resultado.soma === 9 && resultado.maiorNumero === 4) ? 1 : 0;
      resultados.push({ questao: 10, score: pontuacao });
    });
  });
  


afterAll(() => {
  const notaFinal = resultados.reduce((acc, curr) => acc + curr.score, 0);
  console.log('\nResultados por Questão:');
  resultados.forEach((r) =>
    console.log(
      `Questão ${r.questao}: ${
        r.score >= 0.5 * (r.questao < 5 ? 1 : r.questao < 9 ? 2 : 4)
          ? 'Aprovado'
          : 'Reprovado'
      } - Pontuação: ${r.score}`,
    ),
  );
  console.log('\nNota final:', notaFinal.toFixed(2) + '/10');
});