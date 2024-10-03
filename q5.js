/**
 * Questão 5: Manipulação de Array de Linguagens de Programação
 *
 * Implemente uma função chamada manipulacaoArrayLinguagens que não recebe parâmetros.
 * Esta função deve realizar uma série de operações em um array de linguagens de programação
 * e retornar um objeto com os resultados de cada operação. Após cada operação, utilize
 * console.log para imprimir o estado do array.
 *
 * Requisitos:
 * a) Crie um array chamado "linguagens" com os elementos: "JavaScript", "Python" e "Java".
 *    - Imprima o estado inicial do array usando console.log.
 *
 * b) Adicione "C++" e "Ruby" ao final do array.
 *    - Após esta operação, imprima o array usando console.log.
 *
 * c) Remova o primeiro item do array.
 *    - Imprima o array após esta operação usando console.log.
 *
 * d) Adicione "TypeScript" e "Go" entre "Python" e "Java".
 *    - Utilize console.log para mostrar o array após esta inclusão.
 *
 * e) Adicione "Rust" no início do array.
 *    - Imprima o array após adicionar "Rust" usando console.log.
 *
 * f) Verifique o tamanho do array.
 *    - Utilize console.log para imprimir o tamanho do array após todas as modificações.
 *
 * g) Crie um novo array "versoes" com o ano de criação de cada linguagem, usando o objeto
 *    anosLancamento fornecido abaixo. Por exemplo, versoes para as linguagens iniciais seria [1995, 1991, 1995].
 *    - console.log o array versoes.
 *
 * h) Crie um novo array "modernas" com linguagens criadas após o ano 2000.
 *    - Imprima o array modernas usando console.log.
 *
 * i) Retorne um objeto com os resultados de cada operação.
 *
 * Objeto anosLancamento:
 * const anosLancamento = {
 *     JavaScript: 1995,
 *     Python: 1991,
 *     Java: 1995,
 *     "C++": 1985,
 *     Ruby: 1995,
 *     TypeScript: 2012,
 *     Go: 2009,
 *     Rust: 2010
 * };
 */

function manipulacaoArrayLinguagens() {
  // a) Criação do array inicial
  let linguagens = ["JavaScript", "Python", "Java"];
  console.log("Inicial:", linguagens);

  // b) Adição de "C++" e "Ruby" ao final do array
  linguagens.push("C++", "Ruby");
  console.log("Após adicionar C++ e Ruby:", linguagens);

  // c) Remoção do primeiro item do array
  linguagens.shift();
  console.log("Após remover o primeiro item:", linguagens);

  // d) Adição de "TypeScript" e "Go" entre "Python" e "Java"
  linguagens.splice(1, 0, "TypeScript", "Go");
  console.log("Após adicionar TypeScript e Go:", linguagens);

  // e) Adição de "Rust" no início do array
  linguagens.unshift("Rust");
  console.log("Após adicionar Rust:", linguagens);

  // f) Verificação do tamanho do array
  const tamanhoArray = linguagens.length;
  console.log("Tamanho do array:", tamanhoArray);

  // g) Criação do array "versoes" com o ano de criação de cada linguagem
  const anosLancamento = {
      JavaScript: 1995,
      Python: 1991,
      Java: 1995,
      "C++": 1985,
      Ruby: 1995,
      TypeScript: 2012,
      Go: 2009,
      Rust: 2010
  };
  const versoes = linguagens.map(linguagem => anosLancamento[linguagem] || null);
  console.log("Versões:", versoes);

  // h) Criação do array "modernas" com linguagens criadas após o ano 2000
  const modernas = linguagens.filter(linguagem => anosLancamento[linguagem] > 2000);
  console.log("Modernas:", modernas);

  // i) Retorno de um objeto com os resultados de cada operação
  return {
      linguagensFinal: linguagens,
      tamanhoArray,
      versoes,
      modernas
  };
}

// Executando a função para ver o resultado
const resultado = manipulacaoArrayLinguagens();
console.log("Resultado final:", resultado);

module.exports = manipulacaoArrayLinguagens;