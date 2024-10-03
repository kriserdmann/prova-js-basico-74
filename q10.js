/**
 * Questão 10: Manipulação de Array de Números
 *
 * Implemente uma função chamada manipularArray que recebe um array de números como parâmetro.
 * Esta função deve realizar uma série de operações no array e retornar um objeto com os resultados.
 *
 * Requisitos:
 * a) Crie uma cópia do array original.
 * b) Adicione o número 0 no início da cópia do array.
 * c) Adicione o número 10 no final da cópia do array.
 * d) Remova o primeiro e o último elemento da cópia do array.
 * e) Calcule a soma de todos os números na cópia do array.
 * f) Encontre o maior número na cópia do array.
 * g) Crie um novo array apenas com os números pares da cópia do array.
 *
 * Exemplo de uso:
 * const numeros = [1, 2, 3, 4, 5];
 * const resultado = manipularArray(numeros);
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // {
 * //   arrayOriginal: [1, 2, 3, 4, 5],
 * //   arrayCopia: [ 1, 2, 3, 4, 5 ],
 * //   soma: 15,
 * //   maiorNumero: 5,
 * //   numerosPares: [2, 4]
 * // }
 */
function manipularArray(numeros) {
  // a) Cria uma cópia do array original
  const arrayCopia = [...numeros];

  // b) Adiciona o número 0 no início da cópia do array
  arrayCopia.unshift(0);

  // c) Adiciona o número 10 no final da cópia do array
  arrayCopia.push(10);

  // d) Remove o primeiro e o último elemento da cópia do array
  arrayCopia.shift();
  arrayCopia.pop();

  // e) Calcula a soma de todos os números na cópia do array
  const soma = arrayCopia.reduce((acc, num) => acc + num, 0);

  // f) Encontra o maior número na cópia do array
  const maiorNumero = Math.max(...arrayCopia);

  // g) Cria um novo array apenas com os números pares da cópia do array
  const numerosPares = arrayCopia.filter((num) => num % 2 === 0);

  return {
    arrayOriginal: numeros,
    arrayCopia: arrayCopia,
    soma: soma,
    maiorNumero: maiorNumero,
    numerosPares: numerosPares,
  };
}

// Exemplo de uso conforme o enunciado
const numeros = [1, 2, 3, 4, 5];
const resultado = manipularArray(numeros);
console.log(resultado);
// Espera-se que imprima algo como:
// {
//   arrayOriginal: [1, 2, 3, 4, 5],
//   arrayCopia: [ 1, 2, 3, 4, 5 ],
//   soma: 15,
//   maiorNumero: 5,
//   numerosPares: [2, 4]
// }

module.exports = manipularArray;
