/**
 * Questão 7: Elementos comuns em dois arrays
 *
 * Considere os dois arrays abaixo:
 * let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 * let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
 *
 * Implemente uma função chamada elementosComuns que receba esses dois arrays como parâmetros
 * e retorne um novo array com os elementos que aparecem em ambos os arrays.
 * Exemplo de uso:
 * const resultado = elementosComuns([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
 * console.log(resultado); // Deve imprimir: [3, 4, 5]
 */
function elementosComuns(array1, array2) {
  // Converter o segundo array em um conjunto para busca rápida
  const setArray2 = new Set(array2);

  // Filtrar elementos do primeiro array que estão presentes no conjunto do segundo array
  const elementosComuns = array1.filter((element) => setArray2.has(element));

  return elementosComuns;
}

// Exemplo de uso conforme o enunciado
const resultado = elementosComuns([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7]);
console.log(resultado); // Deve imprimir: [3, 4, 5]

module.exports = elementosComuns;
