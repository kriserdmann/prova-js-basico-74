/**
 * Questão 8: Encontrar caracteres duplicados em uma string
 *
 * Implemente uma função chamada encontrarDuplicados que receba uma string como parâmetro
 * e retorne um objeto onde as chaves são os caracteres duplicados e os valores são o número
 * de vezes que cada caractere aparece na string.
 *
 * Exemplo:
 * const resultado = encontrarDuplicados("programacao web e mobile");
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 }
 *
 * Observação: Considere espaços em branco como caracteres válidos.
 * Ignore diferenças entre maiúsculas e minúsculas (case-insensitive).
 */
function encontrarDuplicados(str) {
  // Converter a string para minúsculas para ignorar diferenças de maiúsculas/minúsculas
  str = str.toLowerCase();

  // Objeto para armazenar a contagem dos caracteres
  const contador = {};

  // Iterar sobre cada caractere da string
  for (const char of str) {
    // Contar cada caractere
    contador[char] = (contador[char] || 0) + 1;
  }

  // Filtrar o objeto para manter apenas os caracteres que aparecem mais de uma vez
  const duplicados = {};
  for (const [char, count] of Object.entries(contador)) {
    if (count > 1) {
      duplicados[char] = count;
    }
  }

  return duplicados;
}

module.exports = encontrarDuplicados;
