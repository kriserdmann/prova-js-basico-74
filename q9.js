/**
 * Questão 9: Objeto Estudante
 *
 * Implemente uma função chamada criarEstudante que não recebe parâmetros.
 * Esta função deve criar e retornar um objeto estudante com as seguintes características:
 *
 * 1. O objeto deve ter as propriedades: nome, idade, nota1, nota2 e nota3.
 * 2. Atribua valores iniciais de sua escolha para essas propriedades.
 * 3. Adicione um método chamado media que retorne a média das três notas do estudante.
 * 4. Adicione um método chamado situacao que retorne "Aprovado" se a média do estudante
 *    for maior ou igual a 7 e "Reprovado" caso contrário.
 *
 *
 * Exemplo de uso:
 * const estudante = criarEstudante();
 * console.log(estudante.nome);
 * console.log(estudante.media());
 * console.log(estudante.situacao());
 */

function criarEstudante() {
  // Criação do objeto estudante com propriedades iniciais
  const estudante = {
    nome: 'João Silva',
    idade: 20,
    nota1: 8,
    nota2: 7.5,
    nota3: 6.5,

    // Método para calcular a média das notas
    media: function () {
      return (this.nota1 + this.nota2 + this.nota3) / 3;
    },

    // Método para determinar a situação do estudante
    situacao: function () {
      return this.media() >= 7 ? 'Aprovado' : 'Reprovado';
    },
  };

  return estudante;
}

// Exemplo de uso conforme o enunciado
const estudante = criarEstudante();
console.log(`Nome: ${estudante.nome}`);
console.log(`Idade: ${estudante.idade}`);
console.log(`Média: ${estudante.media().toFixed(2)}`);
console.log(`Situação: ${estudante.situacao()}`);

module.exports = criarEstudante;
