/**
 * Questão 7: Elementos comuns em dois arrays
 *
 * Implemente uma função chamada elementosComuns que receba dois arrays como parâmetros
 * e retorne um novo array com os elementos que aparecem em ambos os arrays.
 * Exemplo de uso:
 * const resultado = elementosComuns([1, 2, 3, 4, 5. 10, 15, 16], [3, 4, 5, 6, 7, 15, 24]);
 * console.log(resultado); // Deve imprimir: [3, 4, 5, 15]
 */
function elementosComuns(array1, array2) {
  // Converter o segundo array em um conjunto para busca rápida
  const setArray2 = new Set(array2);

  // Filtrar elementos do primeiro array que estão presentes no conjunto do segundo array
  const elementosComuns = array1.filter((element) => setArray2.has(element));

  return elementosComuns;
}


module.exports = elementosComuns;
