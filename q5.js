/**
 * Questão 5: Manipulação de Array de Linguagens de Programação
 *
 * Implemente uma função chamada manipulacaoArrayLinguagens que não recebe parâmetros.
 * Esta função deve realizar uma série de operações em um array de linguagens de programação
 * e retornar um objeto com os resultados de cada operação.
 *
 * Requisitos:
 * a) Crie um array chamado "linguagens" com: "JavaScript", "Python" e "Java".
 * b) Adicione "C++" e "Ruby" ao final do array.
 * c) Remova o primeiro item do array.
 * d) Adicione "TypeScript" e "Go" entre "Python" e "Java".
 * e) Adicione "Rust" no início do array.
 * f) Verifique o tamanho do array.
 * g) Crie um novo array "versoes" com o ano de criação de cada linguagem, usando o objeto anosLancamento fornecido.
 * h) Crie um novo array "modernas" com linguagens criadas após o ano 2000.
 * i) Retorne um objeto com os resultados de cada operação.
 *
 * Use o seguinte objeto para os anos de lançamento:
 * const anosLancamento = {
 *   "JavaScript": 1995,
 *   "Python": 1991,
 *   "Java": 1995,
 *   "C++": 1979,
 *   "Ruby": 1995,
 *   "TypeScript": 2012,
 *   "Go": 2009,
 *   "Rust": 2010
 * };
 *
 * Exemplo de retorno:
 * {
 *   arrayInicial: ["JavaScript", "Python", "Java"],
 *   arrayFinal: ["Rust", "Python", "TypeScript", "Go", "Java", "C++", "Ruby"],
 *   tamanhoArray: 7,
 *   arrayVersoes: [2010, 1991, 2012, 2009, 1995, 1979, 1995],
 *   arrayModernas: ["Rust", "TypeScript", "Go"]
 * }
 *
 * Dica: Use os métodos de array como push(), unshift(), shift(), splice(), map() e filter().
 */

function manipulacaoArrayLinguagens() {
  let linguagens = ['JavaScript', 'Python', 'Java']; // Estado inicial
  linguagens.push('C++', 'Ruby'); // Adiciona C++ e Ruby ao final
  linguagens.shift(); // Remove JavaScript, o primeiro item
  // Adiciona TypeScript e Go entre Python e Java
  const indexJava = linguagens.indexOf('Java');
  linguagens.splice(indexJava, 0, 'TypeScript', 'Go');
  linguagens.unshift('Rust'); // Adiciona Rust no início

  return {
    arrayInicial: ['JavaScript', 'Python', 'Java'], // Array inicial
    arrayFinal: linguagens, // Estado final do array
    tamanhoArray: linguagens.length, // Tamanho do array
  };
}

module.exports = manipulacaoArrayLinguagens;
